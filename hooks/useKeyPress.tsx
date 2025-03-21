import { useEffect, useCallback } from "react";

export default function useKeyPress(callback: () => void, keys: string[]) {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const isMac = navigator.userAgent.includes("Mac");
      const isCmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;

      if (isCmdOrCtrl && keys.includes(event.key)) {
        event.preventDefault();
        callback();
      }
    },
    [callback, keys]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
}
