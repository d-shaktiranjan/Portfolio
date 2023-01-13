import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContentFromWeb } from '../utils/blog';
import { NoMatch } from './NoMatch';

export const Blog = () => {
    const params = useParams();
    const [blogList, setBlogList] = useState([]);
    const [blogContent, updateBlogContent] = useState("");

    //  fetch blog list from web
    useEffect(() => {
        const updateBlogList = async () => {
            const list = await (await getContentFromWeb("https://gist.githubusercontent.com/d-shaktiranjan/d0eda4b2468f55385f03eb9716719cce/raw/11a4221688dc4d48d083829c8e520163b36293ae/blogList.json")).json();
            setBlogList(list);
        }
        updateBlogList();
    }, [])

    // search blog from the list
    let blogData;
    blogList.map((item) => {
        if (item.slug === params.slug) {
            blogData = item;
        }
    });

    // get blog content from gist link
    const getBlog = async () => {
        const data = await (await getContentFromWeb(blogData.fileLink)).text();
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
