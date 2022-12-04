import React from 'react';
import '../style/navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='flex navbar'>
            <nav>
                <ul className='nav-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li className='active-link'><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact-me">Contact Me</Link></li>
                </ul>
            </nav>
        </div>
    )
}
