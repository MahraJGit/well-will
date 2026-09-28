"""Convert countries-110m TopoJSON into a crisp Our Reach SVG map."""
from __future__ import annotations

import json
import math
from pathlib import Path

ROOT = Path(r"D:\Mehraj Technologies\WellWillWebsite")
TOPO = ROOT / "public" / "images" / "countries-110m.json"
OUT = ROOT / "public" / "images" / "our-reach-map.svg"

# Figma highlight color + muted base
TEAL = "#116B72"
BASE = "#D8D8D8"
BASE_SOFT = "rgba(204,204,204,0.45)"

# ISO numeric ids in Natural Earth 110m (used by world-atlas countries-110m)
# Match Figma visual: N. America, Greenland, Russia, China
HIGHLIGHT_IDS = {
    "840",  # United States
    "124",  # Canada
    "304",  # Greenland
    "643",  # Russia
    "156",  # China
}

# Marker positions as % of viewBox (tuned to Figma layout)
MARKERS = [
    {"name": "Manga", "x": 17.4, "y": 24.0, "size": 16},
    {"name": "Khewra", "x": 35.5, "y": 9.5, "size": 14},
    {"name": "Dinga", "x": 19.4, "y": 37.0, "size": 16},
    {"name": "Lilla", "x": 71.0, "y": 20.5, "size": 14},
    {"name": "Dinga", "x": 73.5, "y": 41.5, "size": 14},
]

VIEW_W, VIEW_H = 1280, 606


def decode_arcs(topo: dict) -> list[list[tuple[float, float]]]:
    transform = topo.get("transform", {})
    scale = transform.get("scale", [1, 1])
    translate = transform.get("translate", [0, 0])
    arcs_out: list[list[tuple[float, float]]] = []
    for arc in topo["arcs"]:
        x = y = 0
        pts: list[tuple[float, float]] = []
        for dx, dy in arc:
            x += dx
            y += dy
            pts.append((x * scale[0] + translate[0], y * scale[1] + translate[1]))
        arcs_out.append(pts)
    return arcs_out


def mercator(lon: float, lat: float) -> tuple[float, float]:
    lat = max(min(lat, 85.0), -85.0)
    x = (lon + 180.0) / 360.0
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2
    return x, y


def project_points(pts: list[tuple[float, float]]) -> list[tuple[float, float]]:
    # Natural Earth lon/lat → mercator → fit into view with padding
    projected = [mercator(lon, lat) for lon, lat in pts]
    return projected


def fit_paths(all_rings: list[list[tuple[float, float]]]) -> list[list[tuple[float, float]]]:
    xs = [p[0] for ring in all_rings for p in ring]
    ys = [p[1] for ring in all_rings for p in ring]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    # Slight inset to match Figma map margins
    pad_x, pad_y = 0.02, 0.04
    w = max_x - min_x
    h = max_y - min_y

    def map_pt(p: tuple[float, float]) -> tuple[float, float]:
        nx = (p[0] - min_x) / w
        ny = (p[1] - min_y) / h
        return (
            (pad_x + nx * (1 - 2 * pad_x)) * VIEW_W,
            (pad_y + ny * (1 - 2 * pad_y)) * VIEW_H,
        )

    return [[map_pt(p) for p in ring] for ring in all_rings]


def ring_to_d(ring: list[tuple[float, float]]) -> str:
    if len(ring) < 2:
        return ""
    parts = [f"M{ring[0][0]:.2f},{ring[0][1]:.2f}"]
    for x, y in ring[1:]:
        parts.append(f"L{x:.2f},{y:.2f}")
    parts.append("Z")
    return "".join(parts)


def resolve_arc(arcs: list[list[tuple[float, float]]], idx: int) -> list[tuple[float, float]]:
    if idx < 0:
        pts = list(reversed(arcs[~idx]))
    else:
        pts = arcs[idx]
    return pts


def geom_rings(geom: dict, arcs: list[list[tuple[float, float]]]) -> list[list[tuple[float, float]]]:
    gtype = geom["type"]
    rings: list[list[tuple[float, float]]] = []

    def build_ring(arc_idxs: list[int]) -> list[tuple[float, float]]:
        pts: list[tuple[float, float]] = []
        for i, aidx in enumerate(arc_idxs):
            seg = resolve_arc(arcs, aidx)
            pts.extend(seg if i == 0 else seg[1:])
        return project_points(pts)

    if gtype == "Polygon":
        for ring in geom["arcs"]:
            rings.append(build_ring(ring))
    elif gtype == "MultiPolygon":
        for poly in geom["arcs"]:
            for ring in poly:
                rings.append(build_ring(ring))
    return rings


def main() -> None:
    topo = json.loads(TOPO.read_text(encoding="utf-8"))
    arcs = decode_arcs(topo)
    countries = topo["objects"]["countries"]["geometries"]

    base_rings: list[list[tuple[float, float]]] = []
    highlight_rings: list[list[tuple[float, float]]] = []

    for geom in countries:
        cid = str(geom.get("id") or "")
        rings = geom_rings(geom, arcs)
        if cid in HIGHLIGHT_IDS:
            highlight_rings.extend(rings)
        else:
            base_rings.extend(rings)

    fitted_base = fit_paths(base_rings) if base_rings else []
    # Fit highlights with same transform as all land — recomputed via combined
    all_for_fit = base_rings + highlight_rings
    # Recompute fit using all rings together for consistent projection
    xs = [p[0] for ring in all_for_fit for p in ring]
    ys = [p[1] for ring in all_for_fit for p in ring]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    w, h = max_x - min_x, max_y - min_y
    pad_x, pad_y = 0.03, 0.05

    def map_pt(p: tuple[float, float]) -> tuple[float, float]:
        nx = (p[0] - min_x) / w
        ny = (p[1] - min_y) / h
        return (
            (pad_x + nx * (1 - 2 * pad_x)) * VIEW_W,
            (pad_y + ny * (1 - 2 * pad_y)) * VIEW_H,
        )

    def map_rings(rings: list[list[tuple[float, float]]]) -> list[str]:
        out = []
        for ring in rings:
            mapped = [map_pt(p) for p in ring]
            if len(mapped) < 3:
                continue
            xs = [p[0] for p in mapped]
            ys = [p[1] for p in mapped]
            w = max(xs) - min(xs)
            h = max(ys) - min(ys) + 0.01
            # Drop date-line wrap artifacts (full-width flat bands)
            if w > VIEW_W * 0.7 and h < VIEW_H * 0.25:
                continue
            if w / h > 18:
                continue
            d = ring_to_d(mapped)
            if d:
                out.append(d)
        return out

    base_paths = map_rings(base_rings)
    hi_paths = map_rings(highlight_rings)

    drop = (
        '<path d="M6.75 0C3.022 0 0 3.134 0 7c0 4.9 6.75 9.3 6.75 9.3S13.5 11.9 13.5 7C13.5 3.134 10.478 0 6.75 0zm0 9.5A2.5 2.5 0 1 1 6.75 4.5a2.5 2.5 0 0 1 0 5z" '
        'fill="#F7F7F2" stroke="rgba(247,247,242,0.2)" stroke-width="0.5"/>'
    )

    marker_svg = []
    for m in MARKERS:
        x = m["x"] / 100 * VIEW_W
        y = m["y"] / 100 * VIEW_H
        s = m["size"] / 13.5
        marker_svg.append(
            f'<g transform="translate({x:.1f} {y:.1f})">'
            f'<g transform="translate(-{6.75 * s:.2f} -{16.3 * s:.2f}) scale({s:.3f})">{drop}</g>'
            f'<text x="0" y="{6 * s + 14:.1f}" text-anchor="middle" '
            f'font-family="Inter, Helvetica, Arial, sans-serif" font-size="{m["size"]:.0f}" '
            f'fill="#FFFFFF">{m["name"]}</text></g>'
        )

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{VIEW_W}" height="{VIEW_H}" viewBox="0 0 {VIEW_W} {VIEW_H}" fill="none">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff" stop-opacity="0"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g fill="{BASE}" fill-opacity="0.5" stroke="none">
    {"".join(f'<path d="{d}"/>' for d in base_paths)}
  </g>
  <g fill="{TEAL}" stroke="none">
    {"".join(f'<path d="{d}"/>' for d in hi_paths)}
  </g>
  {"".join(marker_svg)}
</svg>
'''
    OUT.write_text(svg, encoding="utf-8")
    print(f"Wrote {OUT} ({len(base_paths)} base, {len(hi_paths)} highlight paths)")


if __name__ == "__main__":
    main()
