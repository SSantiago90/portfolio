"use client";
import { useState } from "react";
import * as icons from "@icons-pack/react-simple-icons";
import { Pickaxe } from "lucide-react";

// Map of tag names to their corresponding icons
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  react: icons.SiReact,
  node: icons.SiNodedotjs,
  nest: icons.SiNestjs,
  tailwind: icons.SiTailwindcss,
  typescript: icons.SiTypescript,
  firebase: icons.SiFirebase,
  "react router": icons.SiReactrouter,
  redux: icons.SiRedux,
  nextjs: icons.SiNextdotjs,
  express: icons.SiExpress,
  mongodb: icons.SiMongodb,
  "react query": icons.SiReactquery,
  docker: icons.SiDocker,
  photoshop: icons.SiAdobephotoshop,
  "after effects": icons.SiAdobeaftereffects,
  figma: icons.SiFigma,
  illustrator: icons.SiAdobeillustrator,
  git: icons.SiGit,
  wip: Pickaxe,
  jwt: icons.SiJsonwebtokens,
};

export default function Tag({
  children,
  type,
  color,
  className,
  variant,
  style,
  size,
}: {
  children: string;
  color?: string;
  type?: string;
  className?: string;
  variant?: string;
  style?: object;
  size?: "sm" | "md" | "lg";
}) {
  const [isHover, setIsHover] = useState(false);
  const IconComponent =
    type !== "base" ? ICON_MAP[children.toLowerCase()] : null;

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`inline-block tag ${size ? `text-${size}` : "text-sm"} ${
        size == "md" ? "px-3 py-1" : "px-2 py-1"
      } text-center rounded-md dark:text-zinc-200 text-zinc-600 dark:border-zinc-200 border-zinc-600 dark:hover:text-white ${
        variant === "base" ? "hover:text-black" : "hover:text-white"
      } hover:text-black${
        variant != "base"
          ? "hover:border-transparent dark:hover:border-transparent"
          : ""
      } ${
        variant === "base" ? "cursor-default" : "cursor-pointer"
      } ${className} `}
      style={{
        borderStyle: "dashed",
        backgroundColor: isHover ? color : "transparent",
        opacity: isHover ? 1 : 0.63,
        ...style,
      }}
    >
      <span className="flex tag-text items-center gap-2 ">
        {IconComponent && <IconComponent className="h-3 w-3" />}
        {children}
      </span>
    </div>
  );
}
