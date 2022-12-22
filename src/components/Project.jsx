import React from 'react';
import defaultProjectImage from '../static/projectImages/default.png';
import '../style/project.css';

export const Project = (props) => {
    const projectInfo = props.projectInfo;
    const tools = projectInfo.tools;

    const getProjectImage = () => {
        if (projectInfo.isLocalImage) {
            const localImage = require(`../static/projectImages/${projectInfo.projectImage}`);
            return localImage;
        }
        return projectInfo.projectImage || defaultProjectImage;
    }

    return (
        <div className='container flex project-card'>
            <img className='project-image' src={getProjectImage()} alt={projectInfo.projectName} />
            <h3 className='sub-heading project-title accent'>{projectInfo.projectName || "Project Name"}</h3>
            <div className='project-tech'>{tools.join(" | ")}</div>
            <div className='project-details'>
                {projectInfo.details}
            </div>
            <div>
                {projectInfo.repoLink && <span className='card-link'><a href={projectInfo.repoLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i> GitHub</a></span>}
                {projectInfo.liveLink && <span className='card-link'><a href={projectInfo.liveLink} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link"></i> Live Link</a></span>}
            </div>
        </div>
    )
}
