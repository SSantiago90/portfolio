export default function TopShade({
  isHidden,
  theme,
}: {
  isHidden: boolean;
  theme: string | undefined;
}) {
  return (
    <div
      style={{
        boxShadow: `${
          theme !== "light"
            ? "0px 50px 100px 50px rgba(10,10,10,0.8)"
            : "0px 80px 100px 80px rgba(235,235,235,235.35)"
        }`,
        zIndex: "3",
        top: isHidden ? "-200px" : "-50px",
        transition: "all 0.5s ease-in-out",
      }}
      className="fixed top-0 left-0 right-0 w-full shadow-md shadow-overlay height-[1px] backdrop-blur-md"
    ></div>
  );
}
