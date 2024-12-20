import { ProjectCard } from "./ProjectCard";
import projectData from "../../data/projects.json";

export const Projects = () => {
  return (
    <div className="container grid project-section">
      <title>Projects | Shakti Ranjan Debata</title>
      {projectData.map((item, index) => (
        <ProjectCard projectInfo={item} key={index} />
      ))}
    </div>
  );
};
