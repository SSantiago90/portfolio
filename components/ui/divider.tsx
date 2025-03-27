"use client";

import { useTheme } from "next-themes";

export default function Divider({
  className,
  animated,
  style,
}: {
  className?: string;
  animated?: boolean;
  style?: React.CSSProperties;
}) {
  const { theme } = useTheme();
  const classes = `${animated ? "block relative" : ""}, ${className} pb-2`;

  return (
    <div className={classes}>
      <div
        style={{ ...style }}
        className={`divisor animate-grow ${
          theme !== "light" ? "dark" : "light"
        }`}
      />
    </div>
  );
}
