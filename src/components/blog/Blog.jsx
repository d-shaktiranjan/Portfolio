import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContentFromWeb } from '../../utils/blog';
import { NoMatch } from '../NoMatch';
import { BlogPart } from './BlogPart';
import { BlogLoading } from './BlogLoading';
import '../../style/blog.css';

export const Blog = () => {
    const params = useParams();

    // state variables
    const [blogContent, setBlogContent] = useState({ "order": [] });
    const [blogData, setBlogData] = useState(null);
    const [waitComplete, setWaitComplete] = useState(false);
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    // env variables
    const branch = process.env.REACT_APP_BLOG_BRANCH;
    const baseUrl = process.env.REACT_APP_BLOG_BASE_URL;

    //  fetch blog list from web
    const updateBlogList = async () => {
        const list = await (await getContentFromWeb(`${baseUrl}/${branch}/about.json`)).json();
        list.map((item) => {
            if (item.slug === params.slug) {
                setBlogData(item);
            }
        });
        setWaitComplete(true);
    }

    // get blog content from gist link
    const getBlog = async () => {
        const fileLink = `${baseUrl}/${branch}/${blogData.filePath}/blog.json`;
        const data = await (await getContentFromWeb(fileLink)).json();
        setTimeout(() => {
            setBlogContent(data)
            setIsLoadingComplete(true);
        }, 500);
    }

    useEffect(() => {
        updateBlogList();
    }, []);

    useEffect(() => {
        getBlog()
    }, [blogData]);

    // if slug is invalid show NoMatch component
    if (!blogData && waitComplete) {
        return (<NoMatch />)
    }

    document.title = isLoadingComplete ? `${blogContent.title} | Shakti Ranjan Debata` : `Blog | Shakti Ranjan Debata`;
    return (
        <div className='container min-height blog-content'>
            {isLoadingComplete ? <>
                <h1 className="accent underline">{blogContent.title}</h1>
                <div className="blog-card-left flex accent">
                    <span><i className="fa-solid fa-user"></i> {blogContent.authorName}</span>
                    <span><i className="fa-solid fa-calendar-days"></i> {blogContent.releaseData}</span>
                </div>
                {
                    blogContent.order.map((item) => (
                        <BlogPart itemName={item} value={blogContent.blogContent[item]} />
                    ))
                }
            </> : <BlogLoading />}
        </div>
    )
}
