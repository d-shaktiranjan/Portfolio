import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getContentFromWeb } from '../utils/blog';
import '../style/blog.css';

const BlogCard = (props) => {
    return (
        <div className="blog-card">
            <Link to={props.slug}>
                <h2 className='accent'>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda qui voluptatibus voluptatem. Expedita officiis magni eligendi modi, aut excepturi numquam quae, ipsa facilis hic quis velit sequi voluptate, recusandae totam reprehenderit fugit nam pariatur asperiores optio! Eius sed non, distinctio, aliquid deserunt impedit voluptatem cum, ipsum reprehenderit atque consectetur.</p>
                <div className='flex blog-card-footer accent'>
                    <div className="blog-card-left flex">
                        <div><i className="fa-solid fa-user accent"></i> Shakti Ranjan Debata</div>
                        <div><i className="fa-solid fa-calendar-days accent"></i> 25th Jan 2022</div>
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
            const list = await (await getContentFromWeb("https://gist.githubusercontent.com/d-shaktiranjan/d0eda4b2468f55385f03eb9716719cce/raw/11a4221688dc4d48d083829c8e520163b36293ae/blogList.json")).json();
            setBlogList(list);
        }
        updateBlogList();
    }, [])

    return (
        <div className='min-height blog-home'>
            <div>
                {
                    blogList.map((item, index) => (
                        // <Link to={item.slug} key={index}>{item.title}</Link>
                        <BlogCard title={item.title} slug={item.slug} />
                    ))
                }
            </div>
        </div>
    )
}
