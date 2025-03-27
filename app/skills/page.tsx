import SkillDetail from "@/components/skills/SkillDetail";
import Divider from "@/components/ui/divider";
import SectionTitle from "@/components/ui/section-title";
import skills from "@/data/skills";

export default function SkillsPage() {
  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <ul className="list-none m-0 p-0">
        {Object.entries(skills).map(([key, value], index) => (
          <div key={key}>
            <SkillDetail title={key} tags={value} order={index} />

            {Object.entries(skills).length - 1 !== index && (
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
