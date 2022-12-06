import React from 'react';
import { Project } from './Project';
import projectData from '../data/projects.json';

export const Projects = () => {
    return (
        <div className='container grid project-section'>
            {
                projectData.map((item) => (
                    <Project projectInfo={item} />
                ))
            }
        </div>
    )
}
