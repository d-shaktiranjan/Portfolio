import React from 'react';
import '../style/home.css';

export const Home = () => {
    return (
        <div className='flex container home'>
            Hey, This is
            <span className='main-heading block'>Shakti Ranjan Debata.</span>
            <span className='main-heading block primary-text-color'>I build Backend things.</span>
            I'm a Computer Science Engineering student passout from CV Raman Global University.
            <button className='primary-btn block'>Know More</button>
        </div>
    )
}
