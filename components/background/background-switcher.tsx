"use client";

import { useUiContext } from "@/storage/UIcontext/UIcontext";
import { Lightbulb, LightbulbOff } from "lucide-react";

export default function BackgroundSwitcher() {
  const { bgEffectsOn, toggleBgEffects } = useUiContext();

  return (
    <>
      <button onClick={toggleBgEffects}>
        {bgEffectsOn ? (
          <LightbulbOff className="m500:h-4 m500:w-4 dark:stroke-white stroke-text inline h-6 w-6" />
        ) : (
          <Lightbulb className="m500:h-4 m500:w-4 stroke-text dark:stroke-white inline h-6 w-6" />
        )}
        <span className="sr-only">Toggle Background Effects</span>
      </button>
    </>
  );
}
