import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getContentFromWeb } from '../../utils/blog';
import '../../style/blog.css';
import noInternetIcon from '../../static/no-internet.png'

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
    const [isWaitOver, setIsWaitOver] = useState(false);

    //  fetch blog list from web
    const updateBlogList = async () => {
        const baseUrl = import.meta.env.VITE_BLOG_BASE_URL;
        const branch = import.meta.env.VITE_BLOG_BRANCH;
        const list = await getContentFromWeb(`${baseUrl}/${branch}/about.json`);
        setBlogList(list);
        setIsWaitOver(true);
    }

    // update blogList, before page loading
    useEffect(() => {
        updateBlogList();
    }, [])

    return (
        <div className='min-height blog-home'>
            {isWaitOver ?
                <div>
                    {
                        blogList.map((item, index) => (
                            <BlogCard info={item} />
                        ))
                    }
                </div> :
                <div className='no-internet flex'>
                    <img src={noInternetIcon} className='no-internet-image' alt="No Internet" />
                    <div className='main-heading accent'>Ooops!</div>
                    <div>
                        There's maybe some network issues on your side.
                    </div>
                    <div>
                        Try changing your DNS settings or network.
                    </div>
                </div>
            }
        </div>
    )
}