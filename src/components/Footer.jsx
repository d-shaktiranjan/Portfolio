import React from 'react';
import '../style/footer.css';

export const Footer = () => {
    return (
        <footer className='flex'>
            <div className="flex social-links">
                <span><a href=""><i class="fa-brands fa-github"></i> GitHub</a></span>
                <span><a href=""><i class="fa-brands fa-linkedin"></i> LinkedIn</a></span>
                <span><a href=""><i class="fa-regular fa-envelope"></i> Email</a></span>
                <span><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></span>
            </div>
            <div className="copy-right">
                <span>&copy; 2022 | Shakti Ranjan Debata. All rights reserved.</span>
            </div>
        </footer>
    )
}
