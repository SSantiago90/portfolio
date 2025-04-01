"use client";

import { createContext, useContext, useEffect, useState } from "react";

const UIcontext = createContext<{
  bgEffectsOn: boolean;
  toggleBgEffects: () => void;
}>({ bgEffectsOn: true, toggleBgEffects: () => {} });

export default UIcontext;

export function UIContextProvider({ children }: { children: React.ReactNode }) {
  const [bgEffectsOn, setBgEffectsOn] = useState<boolean>(false);

  useEffect(() => {
    const bgEffectsOn = window.localStorage.getItem("bgEffectsOn") === "true";
    setBgEffectsOn(bgEffectsOn);
  }, []);

  const toggleBgEffects = () => {
    setBgEffectsOn(!bgEffectsOn);
    window.localStorage.setItem("bgEffectsOn", (!bgEffectsOn).toString());
  };

  const value = { bgEffectsOn, toggleBgEffects };
  return <UIcontext value={value}>{children}</UIcontext>;
}

export function useUiContext() {
  return useContext(UIcontext);
}
