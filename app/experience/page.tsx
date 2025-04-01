import ExperienceDetail from "@/components/Experience-detail";
import Divider from "@/components/ui/divider";
import SectionTitle from "@/components/ui/section-title";
import experience from "@/data/exp";

export default function ExperiencePage() {
  return (
    <div>
      <SectionTitle>Experience</SectionTitle>
      <ul className="list-none m-0 p-0">
        {experience.map((item, index) => (
          <div key={item.title}>
            <ExperienceDetail item={item} order={index} />
            {experience.length - 1 !== index && (
              <Divider
                className="mb-4"
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
