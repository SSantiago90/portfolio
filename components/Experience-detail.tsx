"use client";

import { useEffect, useRef, useState } from "react";
import sleep from "./util/sleep";
import Tag from "./ui/tag";
import { Collapsible, CollapsibleButton } from "./ui/collapsible";

export default function ExperienceDetail({
  item,
  order,
}: {
  item: {
    title: string;
    company: string;
    dates?: string;
    description: string[];
    tags: Array<{ type: string; color?: string }>;
    link?: string;
  };
  order: number;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const initialLoad = useRef(true);

  useEffect(() => {
    const timer = async () => {
      await sleep(1400);
      if (initialLoad) {
        initialLoad.current = false;
        return;
      }
      setCollapsed((prev) => !prev);
    };
    timer();
  }, [order]);

  return (
    <li
      className="mb-8 animate-fade-in"
      style={{ animationDelay: `${(order + 1) * 420}ms` }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <CollapsibleButton
          onCollapse={() => setCollapsed(!collapsed)}
          collapsed={collapsed}
          className="dark:text-blue-400 text-blue-600"
        ></CollapsibleButton>
      </div>

      <div className="animate-show">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <span className="text-lg font-black uppercase opacity-90 tracking-widest dark:text-blue-400 text-blue-600 hover:underline underline-offset-2">
            {item.company}
          </span>
        </a>
        <p className="text-sm font-semibold font-secondary opacity-40">
          {item.dates}
        </p>
      </div>

      <Collapsible collapsed={collapsed}>
        <div>
          <ul className="list-disc pl-6 mt-6 max-w-[720px] font-secondary">
            {item.description.map((desc, index) => (
              <li
                key={index}
                className="font-light mb-2 text-sm text-zinc-600 dark:text-zinc-300 animate-show"
                style={{
                  animationDelay: initialLoad.current
                    ? `${(order + 1) * 500 + index * 300}ms`
                    : `${index * 140}ms`,
                }}
              >
                {desc}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-2 max-w-[420px] flex-wrap">
            {item.tags.map((tag) => (
              <Tag key={tag.type} variant="base">
                {`+ ${tag.type}`}
              </Tag>
            ))}
          </div>
        </div>
      </Collapsible>
    </li>
  );
}
