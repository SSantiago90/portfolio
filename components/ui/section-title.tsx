export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="mb-8 text-4xl font-heading sm:text-5xl opacity-50">
      <span className="">{children}</span>
    </h1>
  );
}
