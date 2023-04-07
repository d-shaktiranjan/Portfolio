import { Skills } from './Skills';
import '../../style/skill.css';

export const SkillSection = () => {
    document.title = "Skills | Shakti Ranjan Debata";

    const lanageList = ["Java", "Python", "Java Script", "Node JS", "HTML", "CSS"];
    const frameworkLibList = ["React", "Express JS", "Django", "Flask", "Bootstrap"];
    const techTools = ["Linux", "Git", "Docker", "Mongo DB"];
    const learningTech = ["React Native", "Typescript", "NEXT.js", "DSA"];

    return (
        <div className='flex skill-section min-height'>
            <Skills list={lanageList} heading="Languages" />
            <Skills list={frameworkLibList} heading="Framework & libs." />
            <Skills list={techTools} heading="Tech Tools" />
            <Skills list={learningTech} heading="Learning" />
        </div>
    )
}
