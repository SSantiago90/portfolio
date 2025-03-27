"use client";

import { usePathname } from "next/navigation";

export default function HoverFooter() {
  const path = usePathname();
  console.log(path);

  /* if (path === "/") return <></>; */

  return (
    <div>
      <div className="relative">
        <div className="rotated-text dark:text-zinc-400 text-zinc-600 opacity-80 px-5 py-1 ">
          <h2>
            {"Created by "}
            <span className="dark:text-white text-black">Salkin Santiago</span>
            {" | Software Developer "}| Copyright &copy;{" "}
            {new Date().getFullYear()}| Licensed under{" "}
            <a
              className="dark:text-white text-black"
              href="https://github.com/sansalkin/personal-website/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
