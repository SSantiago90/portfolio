"use client";
import { useState } from "react";

import {
  SiReact,
  SiNodedotjs,
  SiNestjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiReactrouter,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiDocker,
} from "@icons-pack/react-simple-icons";

import { Pickaxe } from "lucide-react";

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
  style: object;
  size?: "sm" | "md" | "lg";
}) {
  const [isHover, setIsHover] = useState(false);
  let tagIcon;

  if (variant != "base") {
    switch (children.toLowerCase()) {
      case "react":
        tagIcon = SiReact;
        break;
      case "node":
        tagIcon = SiNodedotjs;
        break;
      case "nest":
        tagIcon = SiNestjs;
        break;
      case "tailwind":
        tagIcon = SiTailwindcss;
        break;
      case "typescript":
        tagIcon = SiTypescript;
        break;
      case "firebase":
        tagIcon = SiFirebase;
        break;
      case "react router":
        tagIcon = SiReactrouter;
        break;
      case "redux":
        tagIcon = SiRedux;
        break;
      case "nextjs":
        tagIcon = SiNextdotjs;
        break;
      case "express":
        tagIcon = SiExpress;
        break;
      case "mongodb":
        tagIcon = SiMongodb;
        break;
      case "wip":
        tagIcon = Pickaxe;
        break;
      case "tanstack query":
        tagIcon = SiReactquery;
        break;
      case "docker":
        tagIcon = SiDocker;
        break;
      default:
        tagIcon = null;
    }
  }

  const CustomIcon = tagIcon;

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`inline-block tag ${size ? `text-${size}` : "text-sm"} ${
        size == "md" ? "px-3 py-1" : "px-2 py-1"
      } rounded-md dark:text-zinc-200 text-zinc-600 dark:border-zinc-200 border-zinc-600 hover:text-white ${
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
        {type && tagIcon && <CustomIcon className="h-3 w-3 mr-1" />}
        {children}
      </span>
    </div>
  );
}
