import { ChevronDown } from "lucide-react";

export interface CollapsibleProps {
  collapsed: boolean;
  className?: string;
}

export const Collapsible = ({
  collapsed,
  children,
  className,
}: React.PropsWithChildren<CollapsibleProps>) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: collapsed ? "0fr" : "1fr",
        transition: "grid-template-rows 0.22s ease-in",
      }}
    >
      <div className={className} style={{ overflow: "hidden", minHeight: 0 }}>
        {children}
      </div>
    </div>
  );
};

export const CollapsibleButton = ({
  collapsed,
  onCollapse,
  className,
}: {
  collapsed: boolean;
  onCollapse: () => void;
  className?: string;
}) => {
  return (
    <button
      className={`text-sm font-semibold text-zinc-400${className}`}
      onClick={onCollapse}
    >
      <ChevronDown
        className="opacity-60 hover:opacity-100 transition-all duration-300"
        style={{
          transform: collapsed ? "rotateX(0deg)" : "rotateX(180deg)",
        }}
      ></ChevronDown>
    </button>
  );
};
