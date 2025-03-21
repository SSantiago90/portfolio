"use client";
import { useUiContext } from "@/storage/UIcontext/UIcontext";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import useKeyPress from "@/hooks/useKeyPress";

export default function RightclickMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toggleBgEffects, bgEffectsOn } = useUiContext();

  useKeyPress(() => {
    toggleBgEffects();
  }, ["b"]);

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuCheckboxItem
          checked={bgEffectsOn}
          onClick={toggleBgEffects}
        >
          Background Effects
          <ContextMenuShortcut>⌘B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />

        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
