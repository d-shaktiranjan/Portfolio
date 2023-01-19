import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContentFromWeb } from '../utils/blog';
import { NoMatch } from './NoMatch';
import '../style/blog.css';

export const Blog = () => {
    const params = useParams();
    const [blogContent, updateBlogContent] = useState("");
    const [blogData, setBlogData] = useState(null);
    const [waitComplete, setWaitComplete] = useState(false);

    // env variables
    const branch = process.env.REACT_APP_BLOG_BRANCH;
    const baseUrl = process.env.REACT_APP_BLOG_BASE_URL;

    //  fetch blog list from web
    useEffect(() => {
        console.log(`${baseUrl}/${branch}/about.json`);
        const updateBlogList = async () => {
            const list = await (await getContentFromWeb(`${baseUrl}/${branch}/about.json`)).json();
            list.map((item) => {
                if (item.slug === params.slug) {
                    setBlogData(item);
                }
            });
            setWaitComplete(true);
        }
        updateBlogList();
    }, [])

    // get blog content from gist link
    const getBlog = async () => {
        const fileLink = `${baseUrl}/${branch}/${blogData.filePath}`;
        const data = await (await getContentFromWeb(fileLink)).text();
        updateBlogContent(data)
    }
    getBlog();

    // if slug is invalid show NoMatch component
    if (!blogData && waitComplete) {
        return (<NoMatch />)
    }

    return (
        <div className='min-height'>
            <div dangerouslySetInnerHTML={{ __html: blogContent }} />
        </div>
    )
}
