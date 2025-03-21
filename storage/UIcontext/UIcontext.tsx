"use client";

import { createContext, useContext, useState } from "react";

const UIcontext = createContext<any>(null);

export default UIcontext;

export function UIContextProvider({ children }: { children: React.ReactNode }) {
  const [bgEffectsOn, setBgEffectsOn] = useState(true);
  const toggleBgEffects = () => {
    setBgEffectsOn(!bgEffectsOn);
  };

  const value = { bgEffectsOn, toggleBgEffects };
  return <UIcontext value={value}>{children}</UIcontext>;
}

export function useUiContext() {
  return useContext(UIcontext);
}
