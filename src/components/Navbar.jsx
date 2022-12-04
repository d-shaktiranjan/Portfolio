import React from 'react';
import '../style/navbar.css';

export const Navbar = () => {
    return (
        <div className='flex navbar'>
            <nav>
                <ul className='nav-links'>
                    <li><a href="/about">About</a></li>
                    <li className='active-link'><a href="/projects">Projects</a></li>
                    <li><a href="/education">Education</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    )
}
