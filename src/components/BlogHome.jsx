import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getContentFromWeb } from '../utils/blog';
import '../style/blog.css';

const BlogCard = (props) => {
    document.title = "Blogs | Shakti Ranjan Debata";
    const info = props.info;
    return (
        <div className="blog-card">
            <Link to={info.slug}>
                <h2 className='accent'>{info.title}</h2>
                <p>{info.about}</p>
                <div className='flex blog-card-footer accent'>
                    <div className="blog-card-left flex">
                        <div><i className="fa-solid fa-user accent"></i> {info.author}</div>
                        <div><i className="fa-solid fa-calendar-days accent"></i> {info.date}</div>
                    </div>
                    <div>
                        <div className='accent'>Read More <i className="fa-solid fa-book-open"></i></div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export const BlogHome = () => {
    const [blogList, setBlogList] = useState([]);

    //  fetch blog list from web
    useEffect(() => {
        const updateBlogList = async () => {
            const baseBurl = process.env.REACT_APP_BLOG_BASE_URL;
            const branch = process.env.REACT_APP_BLOG_BRANCH;
            const list = await (await getContentFromWeb(`${baseBurl}/${branch}/about.json`)).json();
            setBlogList(list);
        }
        updateBlogList();
    }, [])

    return (
        <div className='min-height blog-home'>
            <div>
                {
                    blogList.map((item, index) => (
                        <BlogCard info={item} />
                    ))
                }
            </div>
        </div>
    )
}
