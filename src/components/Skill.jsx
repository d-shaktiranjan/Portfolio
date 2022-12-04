import React from 'react';

export const Skill = (props) => {
    return (
        <div className='flex skill'>
            <img className='skill-img' src={props.img} alt={props.title} />
            <div>{props.title}</div>
        </div>
    )
}
