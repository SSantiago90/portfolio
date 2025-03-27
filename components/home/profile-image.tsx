"use client";
import { useUiContext } from "@/storage/UIcontext/UIcontext";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ProfileImg() {
  const { theme } = useTheme();
  const { bgEffectsOn } = useUiContext();

  return (
    <div
      className="me-image-container w-full flex align-center justify-start z-50
        translate-y-[-60px]
        lg:translate-x-[520px] 
        md:translate-x-[420px] 
        sm:translate-x-[300px]
        translate-x-[260px]"
    >
      <Image
        width={469}
        height={590}
        style={{
          animation: "show 1.2s ease-out 1s backwards",
          animationDelay: "200ms",
          position: "absolute",
        }}
        src={
          bgEffectsOn
            ? theme === "light"
              ? "/img/me-grayscale.webp"
              : "/img/me-grayscale.webp"
            : "/img/me-grayscale.webp"
          /* ? "/img/me-light-color.webp"
          : "/img/me-color-dark.webp" */
        }
        alt="Santiago Salkin picture"
      />
    </div>
  );
}
