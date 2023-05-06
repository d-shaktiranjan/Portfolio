import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getContentFromWeb } from '../../utils/blog';
import '../../style/blog.css';

/*  BlogCard sub component, it render Blog title, about, author, date & readmore button,
    And whole card is clickable. */
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
    const updateBlogList = async () => {
        const baseUrl = import.meta.env.VITE_BLOG_BASE_URL;
        const branch = import.meta.env.VITE_BLOG_BRANCH;
        const list = await getContentFromWeb(`${baseUrl}/${branch}/about.json`);
        setBlogList(list);
    }

    // update blogList, before page loading
    useEffect(() => {
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