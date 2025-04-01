import Image from "next/image";
import { Button } from "./ui/button";
import SectionTitle from "./ui/section-title";

const PROJECTS = [
  {
    name: "Project 1",
    description: "Description of project 1",
    previewImage: "/img/work/coderhouse.webp",
    link: "https://example.com/project1",
    repoUrl: "https://github.com/username/project1",
  },
  {
    name: "Project 2",
    description: "Description of project 2",
    previewImage: "/img/work/coderhouse.webp",
    link: "https://example.com/project1",
    repoUrl: "https://github.com/username/project1",
  },
  {
    name: "Project 3",
    description: "Description of project 3",
    previewImage: "/img/work/coderhouse.webp",
    link: "https://example.com/project1",
    repoUrl: "https://github.com/username/project1",
  },
];
export default function Work() {
  return (
    <div>
      <SectionTitle>Work</SectionTitle>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project) => {
          return (
            <div
              className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-4 sm:p-5"
              key={project.name}
            >
              <div className="border-border dark:border-darkBorder shadow-light dark:shadow-dark !-bottom-[2px] rounded-base border-2">
                <Image
                  className="w-full rounded-base"
                  src={`${project.previewImage}`}
                  alt={project.name}
                  width="420"
                  height="420"
                />
              </div>

              <div className="text-text mt-5 font-base">
                <h2 className="text-xl font-heading sm:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2">{project.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <a
                    className="cursor-pointer px-4 py-2 text-center text-sm font-base transition-all "
                    href={project.repoUrl}
                    target="_blank"
                  >
                    <Button className="width-full " variant="neutral">
                      View App
                    </Button>
                  </a>
                  <a
                    className="border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
