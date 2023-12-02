import { useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import projectData from "../../data/projects.json";

export const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Shakti Ranjan Debata";
  }, []);

  return (
    <div className="container grid project-section">
      {projectData.map((item, index) => (
        <ProjectCard projectInfo={item} key={index} />
      ))}
    </div>
  );
};
