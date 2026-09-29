"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { Button } from "./Button";
import { CloseIcon, MenuIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const darkHero = [
    "/",
    "/services",
    "/our-work",
    "/projects",
    "/about",
    "/contact",
    "/fund-a-well",
    "/community-stories",
  ].includes(pathname);
  const light = !darkHero;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="relative mx-auto h-[118px] w-full max-w-[1440px]">
        {/* Logo — 88×70 @ 79,34 */}
        <Link
          href="/"
          className="absolute left-5 top-[34px] z-50 block h-[66px] w-[174px] md:left-10 lg:left-[79px]"
          aria-label="Wells of Punjab home"
        >
          <Image
            src="/images/logo.svg"
            alt="Wells of Punjab"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* horizontal-menu — 588×51, centered @ top 44 */}
        <nav
          className={`absolute left-1/2 top-11 z-40 box-border hidden h-[51px] w-max max-w-[calc(100%-28rem)] -translate-x-1/2 flex-col items-center justify-center rounded-full border border-white/26 px-2 backdrop-blur-[8px] xl:flex ${
            light ? "border-heading/10 bg-heading/[0.06]" : "bg-[rgba(27,31,63,0.16)]"
          }`}
        >
          <div className="flex h-[51px] flex-row items-center justify-center gap-1">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`box-border flex h-[51px] items-center justify-center whitespace-nowrap rounded-full px-3 text-center tracking-[-0.01em] transition-colors duration-200 hover:text-gold ${
                    light ? "text-heading" : "text-white"
                  } ${
                    active
                      ? "text-[16px] font-bold leading-[19px]"
                      : "text-[14px] font-medium leading-[17px]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="absolute right-5 top-[50px] hidden xl:block">
          <Button
            href="/fund-a-well"
            className="h-[50px] text-[18px] [&>span:last-child]:size-[45px]"
          >
            Request a Well
          </Button>
        </div>

        <button
          type="button"
          className={`absolute right-5 top-9 z-50 grid size-11 place-items-center rounded-full border xl:hidden ${
            light ? "border-heading/10 text-heading" : "border-white/26 text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-30 cursor-default bg-black/45 xl:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-40 mx-5 rounded-3xl bg-footer p-5 xl:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-white transition-colors duration-200 hover:bg-white/10 hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3">
              <Button href="/fund-a-well" className="w-full justify-between">
                Request a Well
              </Button>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
