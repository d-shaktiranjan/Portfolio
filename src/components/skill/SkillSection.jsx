import { Skills } from "./Skills";
import "../../style/skill.css";
import skills from "../../data/skills.json";

export const SkillSection = () => {
  return (
    <div className="min-height skill-container">
      <title>Skills | Shakti Ranjan Debata</title>
      <div className="skill-section">
        {Object.entries(skills).map(([heading, values]) => (
          <Skills key={heading} list={values} heading={heading} />
        ))}
      </div>
    </div>
  );
};
