"use client";

import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../theme/theme-switcher";
import Link from "@/components/nav/TransitionLink";
import clsx from "clsx";
import { useState } from "react";

export default function Nav() {
  const path = usePathname();
  const [activePath, setActivePath] = useState<string>(path);

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
    "text-text border-border dark:bg-black/30 bg-white/70 ",
    "backdrop-blur-md dark:border-white dark:text-white shadow-light dark:shadow-white mx-auto flex w-max",
    "gap-5 rounded-base border-2 p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4"
  );

  function onNavigation(href: string) {
    setActivePath(href);
  }

  return (
    <>
      <div className="fixed left-0 top-5 z-50 w-full">
        <nav className={navClass}>
          {links.map((link) => {
            return (
              <Link
                disabled={link.path === path}
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
        </nav>
      </div>
    </>
  );
}
