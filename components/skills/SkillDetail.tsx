import Tag from "../ui/tag";

function SkillDetail({
  title,
  tags,
  order,
}: {
  title: string;
  tags: Array<{ type: string; color?: string }>;
  order: number;
}) {
  return (
    <li
      className="mb-8 animate-fade-in "
      style={{ animationDelay: `${(order + 1) * 420}ms` }}
    >
      <div className="flex justify-center lg:justify-start text-center items-center">
        <h2 className="text-lg lg:text-md mb-4 font-black uppercase lg:min-h-14 flex items-center justify-center opacity-90 tracking-widest dark:text-emerald-400 text-emerald-600">
          {title.toUpperCase()}
        </h2>
      </div>
      <div>
        <ul className="lg:pl-2 pl-4 lg:flex-col flex-row flex flex-wrap gap-3 lg:gap-4 justify-center lg:border-l lg:border-zinc-600 lg:dark:border-zinc-400">
          {tags.map((item, index) => (
            <Tag
              key={item.type}
              type={item.type}
              color={item.color}
              size="md"
              className="opacity-100 animate-show"
              style={{
                opacity: 100,
                animationDelay: `${order * 500 + index * 80}ms`,
                AnimationEffect: "ease-in",
                animationFillMode: "both",
                animationDuration: "130ms",
              }}
            >
              {item.type}
            </Tag>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default SkillDetail;
