import { Skills } from "./Skills";
import "../../style/skill.css";
import skills from "../../data/skills.json";

export const SkillSection = () => {
  return (
    <div className="flex skill-section min-height">
      <title>Skills | Shakti Ranjan Debata</title>

      {Object.entries(skills).map(([heading, values]) => (
        <Skills key={heading} list={values} heading={heading} />
      ))}
    </div>
  );
};
