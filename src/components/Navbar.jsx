import React from 'react';
import '../style/navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='flex navbar'>
            <nav>
                <ul className='nav-links'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
