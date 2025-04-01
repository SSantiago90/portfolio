"use client";

import {
  Moon,
  Sun,
  Lightbulb,
  LightbulbOff,
  FileType,
  FileText,
} from "lucide-react";
import { useUiContext } from "@/storage/UIcontext/UIcontext";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import useKeyPress from "@/hooks/useKeyPress";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function RightclickMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toggleBgEffects, bgEffectsOn } = useUiContext();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useKeyPress(() => {
    toggleBgEffects();
  }, ["b"]);

  useKeyPress(() => {
    router.back();
  }, ["ArrowLeft"]);

  useKeyPress(() => {
    router.forward();
  }, ["ArrowRight"]);

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel className="text-zinc-500 hover:cursor-default">
          Theme
        </ContextMenuLabel>
        <ContextMenuCheckboxItem
          className="hover:cursor-pointer"
          checked={theme === "dark"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Dark Theme
          {theme === "dark" ? (
            <Moon size={16} className="ml-2" />
          ) : (
            <Sun size={16} className="ml-2" />
          )}
          <ContextMenuShortcut>⌘ D</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={bgEffectsOn}
          onClick={toggleBgEffects}
          className="hover:cursor-pointer"
        >
          Background Effects
          {bgEffectsOn ? (
            <Lightbulb size={16} className="ml-2" />
          ) : (
            <LightbulbOff size={16} className="ml-2" />
          )}
          <ContextMenuShortcut>⌘ B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel className="text-zinc-500  hover:cursor-default">
          Navigation
        </ContextMenuLabel>
        <ContextMenuItem
          className="hover:cursor-pointer"
          inset
          onClick={() => router.back()}
        >
          Back
          <ContextMenuShortcut>⌘ ←</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          className="hover:cursor-pointer"
          inset
          onClick={() => router.forward()}
        >
          Forward
          <ContextMenuShortcut>⌘ →</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          className="hover:cursor-pointer"
          onClick={() => window.location.reload()}
          inset
        >
          Reload
          <ContextMenuShortcut>⌘ R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel className="text-zinc-500  hover:cursor-default">
          Download Resume
        </ContextMenuLabel>
        <ContextMenuItem className="hover:cursor-pointer" inset>
          <a
            href="/files/Resume_Salkin_Santiago-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            PDF Resume
          </a>
          <FileText size={16} className="ml-2" />
        </ContextMenuItem>
        <ContextMenuItem className="hover:cursor-pointer" inset>
          <a
            href="/files/Resume_Salkin_Santiago-2025.odt"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            ODT Resume
          </a>
          <FileType size={16} className="ml-2" />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
