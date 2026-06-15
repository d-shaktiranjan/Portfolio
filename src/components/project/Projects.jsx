import { ProjectCard } from "./ProjectCard";
import projectData from "../../data/projects.json";
import { usePageMetadata } from "../../hooks/usePageMetadata";

export const Projects = () => {
  usePageMetadata({
    title: "Projects | Shakti Ranjan Debata",
    description:
      "Browse backend development projects by Shakti Ranjan Debata, including scalable systems, APIs, and full-stack applications.",
  });

  return (
    <div className="container grid project-section">
      {projectData.map((item) => (
        <ProjectCard projectInfo={item} key={item.projectName} />
      ))}
    </div>
  );
};
