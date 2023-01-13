import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getContentFromWeb } from '../utils/blog';

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
        <div className='min-height'>
            <h2 className='accent'>Blog Lists</h2>
            {
                blogList.map((item, index) => (
                    <Link to={item.slug} key={index}>{item.title}</Link>
                ))
            }
        </div>
    )
}
