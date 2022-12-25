import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogList } from '../utils/blog';
import { NoMatch } from './NoMatch';

export const Blog = () => {
    const params = useParams();
    let blogData;
    fetchBlogList().map((item) => {
        if (item.slug === params.slug) {
            blogData = item;
        }
    });
    if (!blogData) {
        return (<NoMatch />)
    }

    return (
        <div>
            <h2>{blogData.title}</h2>
        </div>
    )
}
