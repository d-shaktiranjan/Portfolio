import React from 'react'
import { Skills } from './Skills'
import '../style/skill.css';

export const SkillSection = () => {
    const lanageList = ["Java", "Python", "Java Script", "Node JS", "HTML", "CSS"];
    const frameworkLibList = ["React", "Express JS", "Django", "Flask", "Bootstrap"];
    const techTools = ["Linux", "Git", "Docker", "Mongo DB"];
    return (
        <div className='flex skill-section min-height'>
            <Skills list={lanageList} heading="Languages" />
            <Skills list={frameworkLibList} heading="Framework & libs." />
            <Skills list={techTools} heading="Tech Tools" />
        </div>
    )
}
