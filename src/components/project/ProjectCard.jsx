import "../../style/project.css";

export const ProjectCard = (props) => {
  const projectInfo = props.projectInfo;
  const tools = projectInfo.tools;
  const projectImage = projectInfo.isLocalImage
    ? `src/static/projectImages/${projectInfo.projectImage.split(".")[0]}.png`
    : projectInfo.projectImage;

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
      <div>
        {projectInfo.repoLink && (
          <span className="card-link">
            <a
              href={projectInfo.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </span>
        )}
        {projectInfo.liveLink && (
          <span className="card-link">
            <a
              href={projectInfo.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-link"></i> Live Link
            </a>
          </span>
        )}
      </div>
    </div>
  );
};
