import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogList, getContentFromWeb } from '../utils/blog';
import { NoMatch } from './NoMatch';

export const Blog = () => {
    const params = useParams();
    const [blogContent, updateBlogContent] = useState("");

    // search blog from the list
    let blogData;
    fetchBlogList().map((item) => {
        if (item.slug === params.slug) {
            blogData = item;
        }
    });

    // get blog content from gist link
    const getBlog = async () => {
        const data = await getContentFromWeb(blogData.fileLink);
        updateBlogContent(data)
    }
    getBlog();

    // if slug is invalid show NoMatch component
    if (!blogData) {
        return (<NoMatch />)
    }

    return (
        <div className='min-height'>
            <h2 className='accent'>{blogData.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: blogContent }} />
        </div>
    )
}
