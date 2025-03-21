"use client";

import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import sleep from "./util/sleep";

export default function ExperienceDetail({
  item,
  order,
}: {
  item: {
    title: string;
    company: string;
    dates: string;
    description: string[];
    link: string;
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

  const companyClasses = `
    text-lg font-black uppercase opacity-90 tracking-widest
          text-gradient-${1 /* (order % 3) + 1 */}
    `;

  return (
    <li
      className="mb-8 animate-fade-in"
      style={{ animationDelay: `${(order + 1) * 420}ms` }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <button
          className="text-sm font-semibold text-mainAccent"
          onClick={() => setCollapsed(!collapsed)}
        >
          {!collapsed ? (
            <ChevronsDownUp className="opacity-80" />
          ) : (
            <ChevronsUpDown />
          )}
        </button>
      </div>
      <div className="mb-5 animate-show">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <span className={companyClasses}>{item.company}</span>
        </a>
        <p className="text-sm font-semibold font-secondary opacity-40">
          {item.dates}
        </p>
      </div>
      {!collapsed && (
        <ul className="list-disc pl-6 mt-4 max-w-[720px]  font-secondary">
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
      )}
    </li>
  );
}
