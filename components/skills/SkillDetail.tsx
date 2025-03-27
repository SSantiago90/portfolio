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
      className="mb-8 animate-fade-in"
      style={{ animationDelay: `${(order + 1) * 420}ms` }}
    >
      <div className="flex justify-center text-center items-center">
        <h2 className="text-lg mb-4 font-black uppercase opacity-90 tracking-widest dark:text-emerald-400 text-emerald-600 ">
          {title.toUpperCase()}
        </h2>
      </div>
      <div>
        <ul className="pl-4 flex  flex-wrap gap-3 justify-center">
          {tags.map((item, index) => (
            <Tag
              key={index}
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
