"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../theme/theme-switcher";
import { useTheme } from "next-themes";
import Link from "@/components/nav/TransitionLink";
import clsx from "clsx";
import sleep from "../util/sleep";
import TopShade from "./top-shade";
import BackgroundSwitcher from "../background/background-switcher";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function Nav() {
  const path = usePathname();
  const [activePath, setActivePath] = useState<string>(path);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [mouseOnTop, setMouseOnTop] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setActivePath(path);
  }, [path]);

  const links = [
    {
      path: "/",
      text: "Me",
    },
    {
      path: "/projects",
      text: "Projects",
    },
    {
      path: "/experience",
      text: "Experience",
    },
    {
      path: "/skills",
      text: "Skills",
    },
  ];

  const createLinkClasses = (link: { path: string; text: string }) => {
    return clsx(
      "hover:border-border dark:hover:border-white rounded-base border-2 px-2 py-1 transition-colors",
      link.path === activePath
        ? "border-border dark:border-white"
        : "border-transparent"
    );
  };

  const navClass = clsx(
    "animate-in-from-top",
    "text-text border-border",
    "dark:border-white dark:text-white mx-auto flex w-max",
    "gap-5 rounded-base p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4"
  );

  const isWindowOnTop = () => {
    return window.scrollY === 0;
  };

  async function onNavigation(href: string) {
    setActivePath(href);

    setIsTransitioning(true);
    await sleep(800);
    setIsTransitioning(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 20) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const top = event.clientY;
      if (top < 80) {
        setMouseOnTop(true);
      } else {
        setMouseOnTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <>
      <TopShade
        theme={theme}
        isHidden={theme !== "light" ? isWindowOnTop() : !mouseOnTop}
      />
      <div
        className="fixed text-center top-0 z-50 w-full transition-transform duration-300 uppercase tracking-widest"
        style={{
          transform:
            hidden && !mouseOnTop ? "translateY(-30%)" : "translateY(-100%)",
        }}
      >
        <div
          className={`text-xs px-3 py-1 pt-12 backdrop:blur-sm mx-1 cursor-default inline-block`}
        >
          <Button
            variant="tab"
            className="background-black pt-20 pb-3 -translate-y-3/4 flex"
          >
            <Menu />
            MENU
          </Button>
        </div>
      </div>
      <div
        className="fixed left-0 top-5 z-50 w-full transition-transform duration-300"
        style={{
          transform:
            hidden && !mouseOnTop ? "translateY(-150%)" : "translateY(0)",
        }}
      >
        <nav className={navClass}>
          {links.map((link) => {
            return (
              <Link
                disabled={link.path === path || isTransitioning}
                key={link.path}
                className={createLinkClasses(link)}
                onNavigation={() => onNavigation(link.path)}
                href={link.path}
              >
                {link.text}
              </Link>
            );
          })}
          <ThemeSwitcher />
          <BackgroundSwitcher />
        </nav>
      </div>
    </>
  );
}
