"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { Button } from "./Button";
import { CloseIcon, MenuIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
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
  const light = !darkHero || scrolled;
  const solid = scrolled || light;

  useEffect(() => {
    setScrolled(window.scrollY > 36);
    return scrollY.on("change", (y) => setScrolled(y > 36));
  }, [scrollY]);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid
          ? "bg-white/90 shadow-[0_8px_28px_rgba(14,16,37,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto h-[96px] w-full max-w-[1440px] md:h-[108px]">
        <Link
          href="/"
          className="absolute left-5 top-1/2 z-50 block h-[58px] w-[158px] -translate-y-1/2 md:left-10 md:h-[66px] md:w-[174px] lg:left-[79px]"
          aria-label="Wells of Punjab home"
        >
          <Image
            src={solid ? "/images/logo.svg" : "/images/logo-white.svg"}
            alt="Wells of Punjab"
            fill
            className="object-contain object-left transition-opacity duration-300"
            priority
          />
        </Link>

        <nav
          className={`absolute left-1/2 top-1/2 z-40 box-border hidden h-[51px] w-max max-w-[calc(100%-28rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border px-2 backdrop-blur-[10px] transition-colors duration-500 xl:flex ${
            solid
              ? "border-heading/10 bg-heading/[0.04]"
              : "border-white/26 bg-[rgba(27,31,63,0.16)]"
          }`}
        >
          <div className="flex h-[51px] flex-row items-center justify-center gap-1">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  className={`nav-link-motion box-border flex h-[51px] items-center justify-center whitespace-nowrap rounded-full px-3 text-center tracking-[-0.01em] transition-colors duration-200 hover:text-gold ${
                    solid ? "text-heading" : "text-white"
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

        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 xl:block">
          <Button
            href="/fund-a-well"
            className="h-[50px] text-[18px] [&>span:last-child]:size-[45px]"
          >
            Request a Well
          </Button>
        </div>

        <button
          type="button"
          className={`absolute right-5 top-1/2 z-50 grid size-11 -translate-y-1/2 place-items-center rounded-full border transition-colors duration-300 xl:hidden ${
            solid ? "border-heading/10 text-heading" : "border-white/26 text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-30 cursor-default bg-black/45 xl:hidden"
              onClick={() => setOpen(false)}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="relative z-40 mx-5 rounded-3xl bg-footer p-5 xl:hidden"
              initial={reduce ? false : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.28 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-white transition-colors duration-200 hover:bg-white/10 hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-3">
                <Button href="/fund-a-well" className="w-full justify-between">
                  Request a Well
                </Button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
