"use client";

import { useRef, useState } from "react";
import Tag from "../ui/tag";
import { Button } from "../ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { Collapsible, CollapsibleButton } from "../ui/collapsible";

export default function ProjectDetail({
  item,
  order,
}: {
  item: {
    title: string;
    company: string;
    description: string[];
    tags: Array<{ type: string; color: string }>;
    type: string;
    github: string;
    url?: string;
    img: string;
  };
  order: number;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const initialLoad = useRef(true);

  const titleClass = `text-2xl font-bold uppercase opacity-90 tracking-widest dark:text-pink-500 text-pink-600 hover:underline`;

  return (
    <li
      className="mb-8 animate-fade-in relative overflow-hidden"
      style={{ animationDelay: `${(order + 1) * 420}ms` }}
    >
      <div className="flex justify-between items-center">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <div className="flex gap-2 items-center ">
            <h2 className={titleClass}>{item.title}</h2>
            <LinkIcon
              className="inline dark:text-pink-500 text-pink-600"
              size={20}
            />
          </div>
        </a>

        <CollapsibleButton
          className="text-pink-500 dark:text-pink-500"
          onCollapse={() => setCollapsed(!collapsed)}
          collapsed={collapsed}
        />
      </div>
      <div className="mb-5 animate-show">
        <p className="text-sm font-semibold opacity-80">{item.type}</p>
      </div>
      <Collapsible className="pb-2" collapsed={collapsed}>
        <div className="flex flex-row between gap-8 min-h-[220px]">
          <div
            style={{
              position: "absolute",
              right: "10%",
              top: "0%",
            }}
            className="image-container animate-show md:block hidden"
          >
            <div
              className="image-mask"
              style={{ display: collapsed ? "none" : "block" }}
            >
              <Image
                style={{
                  borderRadius: "5px",
                }}
                width="220"
                height="360"
                alt={`${item.title} sample image`}
                src={item.img}
              />
            </div>
          </div>

          <div className="project-details">
            <ul className="list-disc pl-6 mt-4 max-w-[520px] font-secondary">
              {item.description.map((desc, index) => (
                <li
                  key={desc.toString().slice(0, 10)}
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
                <Tag key={tag.type} color={tag.color} type="slashed">
                  {tag.type}
                </Tag>
              ))}
            </div>
            <div className="mt-10 flex align-middle gap-4 animate-show">
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold"
              >
                <Button variant="outlined">
                  <SiGithub />
                  Github
                </Button>
              </a>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold"
                >
                  <Button variant="outlined">
                    <LinkIcon />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </Collapsible>
    </li>
  );
}
