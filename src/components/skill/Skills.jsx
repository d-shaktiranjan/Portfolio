import { useState, useEffect } from 'react';
import transparentSvg from '../../static/icons/transparent.svg';

const Skill = (props) => {
    const [itemFullPath, setItemFullPath] = useState(transparentSvg);

    // get svg path & set in state variables
    const getImagePath = async (itemTitle) => {
        const svgFile = await import(`../../static/icons/${itemTitle.toLowerCase()}.svg`);
        setItemFullPath(svgFile.default);
    }

    useEffect(() => {
        getImagePath(props.title);
    }, []);

    return (
        <div className='flex skill'>
            <img className='skill-img' src={itemFullPath} alt={props.title} />
            <div>{props.title}</div>
        </div>
    )
}

export const Skills = (props) => {
    return (
        <div>
            <h1 className='sub-heading underline accent'>{props.heading}</h1>
            <div className='grid skills'>
                {
                    props.list.map((item, index) => (
                        <Skill title={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
