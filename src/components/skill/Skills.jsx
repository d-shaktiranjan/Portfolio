import React from 'react';

const Skill = (props) => {
    return (
        <div className='flex skill'>
            <img className='skill-img' src={props.img} alt={props.title} />
            <div>{props.title}</div>
        </div>
    )
}

export const Skills = (props) => {
    const getImagePath = (item) => {
        const fileName = item.toLowerCase();
        const img = require(`../../static/icons/${fileName}.svg`);
        return img;
    }
    return (
        <div>
            <h1 className='sub-heading underline accent'>{props.heading}</h1>
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
