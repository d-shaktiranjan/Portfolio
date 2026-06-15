import { Skills } from "./Skills";
import "../../style/skill.css";
import skills from "../../data/skills.json";
import { usePageMetadata } from "../../hooks/usePageMetadata";

export const SkillSection = () => {
  usePageMetadata({
    title: "Skills | Shakti Ranjan Debata",
    description:
      "Explore the backend development skills of Shakti Ranjan Debata, including languages, frameworks, databases, and tooling.",
  });

  return (
    <div className="min-height skill-container">
      <div className="skill-section">
        {Object.entries(skills).map(([heading, values]) => (
          <Skills key={heading} list={values} heading={heading} />
        ))}
      </div>
    </div>
  );
};
