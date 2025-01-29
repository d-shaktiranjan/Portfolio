import { ProjectCard } from "./ProjectCard";
import projectData from "../../data/projects.json";

export const Projects = () => {
  return (
    <div className="container grid project-section">
      {/* seo tags */}
      <title>Projects | Shakti Ranjan Debata</title>
      <meta
        name="description"
        content="Browse through my backend development projects, showcasing scalable systems, web applications, and API design implementations."
      />

      {projectData.map((item, index) => (
        <ProjectCard projectInfo={item} key={index} />
      ))}
    </div>
  );
};
