import ProjectDetail from "@/components/projects/project-detail";
import SectionTitle from "@/components/ui/section-title";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <ul className="list-none m-0 p-0">
        {projects.map((item, index) => (
          <div key={index}>
            <ProjectDetail item={item} order={index} />
          </div>
        ))}
      </ul>
    </div>
  );
}
