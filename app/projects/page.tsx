import ProjectDetail from "@/components/projects/project-detail";
import Divider from "@/components/ui/divider";
import SectionTitle from "@/components/ui/section-title";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <ul className="list-none m-0 p-0">
        {projects.map((item, index) => (
          <div key={item.title}>
            <ProjectDetail item={item} order={index} />
            {projects.length - 1 !== index && (
              <Divider
                className="mb-6"
                animated
                style={{ animationDelay: `${(index + 1) * 600}ms` }}
              />
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
