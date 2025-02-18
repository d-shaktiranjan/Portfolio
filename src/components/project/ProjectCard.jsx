import "../../style/project.css";
import { GithubLogo, Link } from "@phosphor-icons/react";

export const ProjectCard = (props) => {
  const projectInfo = props.projectInfo;
  const tools = projectInfo.tools;
  const projectImage = `/static/projectImages/${projectInfo.projectImage.split(".")[0]}.png`;

  return (
    <div className="container flex project-card">
      <img
        className="project-image"
        src={projectImage}
        alt={projectInfo.projectName}
      />
      <h3 className="sub-heading project-title accent">
        {projectInfo.projectName || "Project Name"}
      </h3>
      <div className="project-tech">{tools.join(" | ")}</div>
      <div className="project-details">{projectInfo.details}</div>
      <div className="card-link-container">
        {projectInfo.repoLink && (
          <span className="card-link">
            <a
              href={projectInfo.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-provider"
            >
              <GithubLogo size={20} /> GitHub
            </a>
          </span>
        )}
        {projectInfo.liveLink && (
          <span className="card-link">
            <a
              href={projectInfo.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-provider"
            >
              <Link size={20} /> Live Link
            </a>
          </span>
        )}
      </div>
    </div>
  );
};
