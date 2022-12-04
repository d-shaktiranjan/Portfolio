import React from 'react'
import { Skill } from './Skill'
import docker from '../static/icons/docker.svg';

export const Skills = (props) => {
    const getImagePath = (item) => {
        const fileName = item.toLowerCase();
        const img = require(`../static/icons/${fileName}.svg`);
        return img;
    }
    return (
        <div>
            <h1 className='skills-heading underline'>{props.heading}</h1>
            <div className='grid skills'>
                {
                    props.list.map((item) => (
                        <Skill title={item} img={getImagePath(item)} />
                    ))
                }
            </div>
        </div>
    )
}
