import React from 'react'
import { Link } from 'react-router-dom';
import { fetchBlogList } from '../utils/blog';

export const BlogHome = () => {
    return (
        <div className='min-height'>
            <h2 className='accent'>Blog Lists</h2>
            {
                fetchBlogList().map((item) => (
                    <Link to={item.slug}>{item.title}</Link>
                ))
            }
        </div>
    )
}
