import { Skills } from "./Skills";
import "../../style/skill.css";
import skills from "../../data/skills.json";

export const SkillSection = () => {
  return (
    <div className="flex skill-section min-height">
      <title>Skills | Shakti Ranjan Debata</title>
      <Skills list={skills.languageList} heading="Languages" />
      <Skills list={skills.frameworkLibList} heading="Framework & libs." />
      <Skills list={skills.techTools} heading="Tech Tools" />
      <Skills list={skills.learningTech} heading="Learning" />
    </div>
  );
};
