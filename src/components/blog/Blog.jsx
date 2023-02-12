import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContentFromWeb } from '../../utils/blog';
import { NoMatch } from '../NoMatch';
import { BlogPart } from './BlogPart';
import '../../style/blog.css';

export const Blog = () => {
    const params = useParams();
    const [blogContent, setBlogContent] = useState({ "order": [] });
    const [blogData, setBlogData] = useState(null);
    const [waitComplete, setWaitComplete] = useState(false);

    // env variables
    const branch = process.env.REACT_APP_BLOG_BRANCH;
    const baseUrl = process.env.REACT_APP_BLOG_BASE_URL;

    //  fetch blog list from web
    useEffect(() => {
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
        const fileLink = `${baseUrl}/${branch}/${blogData.filePath}/blog.json`;
        const data = await (await getContentFromWeb(fileLink)).json();
        setBlogContent(data)
    }
    getBlog();

    // if slug is invalid show NoMatch component
    if (!blogData && waitComplete) {
        return (<NoMatch />)
    }

    document.title = `${blogContent.title} | Shakti Ranjan Debata`;
    return (
        <div className='container min-height blog-content'>
            <h1 className="accent underline">{blogContent.title}</h1>
            <div className="blog-card-left flex accent">
                <div><i className="fa-solid fa-user"></i> {blogContent.authorName}</div>
                <div><i className="fa-solid fa-calendar-days"></i> {blogContent.releaseData}</div>
            </div>
            {
                blogContent.order.map((item) => (
                    <BlogPart itemName={item} value={blogContent.blogContent[item]} />
                ))
            }
        </div>
    )
}
