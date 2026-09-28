from PIL import Image, ImageFilter

src_path = r"C:\Users\Nasar\.cursor\projects\d-Mehraj-Technologies-WellWillWebsite\assets\c__Users_Nasar_AppData_Roaming_Cursor_User_workspaceStorage_b8831f89d40febe2d0e3f32a9fee68a0_images_image-fe20c0e6-2c10-4995-b2c4-7ec9715cd99b.png"
out_dir = r"D:\Mehraj Technologies\WellWillWebsite\public\images"

src = Image.open(src_path).convert("RGBA")
sw, sh = src.size
sx, sy = sw / 1440.0, sh / 990.0

# Soft wash: full section, edges feathered to white, light blur
wash = src.resize((1440, 990), Image.Resampling.LANCZOS).convert("RGB")
pixels = wash.load()
feather = 64
for y in range(990):
    for x in range(1440):
        d = min(x, y, 1439 - x, 989 - y)
        if d < feather:
            t = d / feather
            t = t * t * (3 - 2 * t)
            r, g, b = pixels[x, y]
            pixels[x, y] = (
                int(255 + (r - 255) * t),
                int(255 + (g - 255) * t),
                int(255 + (b - 255) * t),
            )
wash = wash.filter(ImageFilter.GaussianBlur(radius=2.0))
wash.save(f"{out_dir}/our-reach-wash.png", optimize=True)
print("wash ok")

# Map crop at 2x with white->alpha and soft edge fade
mx = int(round(75 * sx))
my = int(round(290 * sy))
mw = min(int(round(1290 * sx)), sw - mx)
mh = min(int(round(640 * sy)), sh - my)
crop = src.crop((mx, my, mx + mw, my + mh))
map_img = crop.resize((2560, 1212), Image.Resampling.LANCZOS)
map_img = map_img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=55, threshold=2))

px = map_img.load()
W, H = map_img.size
edge_f = 110
for y in range(H):
    for x in range(W):
        r, g, b, a = px[x, y]
        whiteness = (r + g + b) / 765.0
        if whiteness > 0.88 and abs(r - g) < 28 and abs(g - b) < 28:
            t = min(1.0, max(0.0, (whiteness - 0.88) / 0.09))
            a = int(a * (1 - t))
        d = min(x, y, W - 1 - x, H - 1 - y)
        if d < edge_f:
            t = d / edge_f
            t = t * t * (3 - 2 * t)
            a = int(a * t)
        px[x, y] = (r, g, b, a)

map_img.save(f"{out_dir}/our-reach-map.png", optimize=True)
print("map ok", map_img.size)
