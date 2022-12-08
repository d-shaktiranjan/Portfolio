import React from 'react';
import '../style/home.css';
import { Link } from 'react-router-dom';
import myImage from '../static/me.png';

export const Home = () => {
    return (
        <div className='flex container min-height home-section'>
            <div className="flex home">
                Hey, This is
                <span className='main-heading block'>Shakti Ranjan Debata.</span>
                <span className='main-heading block primary-text-color'>I build Backend things.</span>
                I'm a Computer Science Engineering student passout from CV Raman Global University.
                <Link to="/skills" className='primary-btn block'>Explore More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="home-image">
                <img src={myImage} className="my-image" alt="" />
            </div>
        </div>
    )
}
