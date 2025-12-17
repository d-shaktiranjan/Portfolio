import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getContentFromWeb } from "../../utils/blog";
import "../../style/blog.css";
import { CalendarDots, User, BookOpen } from "@phosphor-icons/react";

export const BlogHome = () => {
  const [blogList, setBlogList] = useState([]);
  const [isWaitOver, setIsWaitOver] = useState(false);

  //  fetch blog list from web
  const updateBlogList = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BLOG_BASE_URL;
      const branch = import.meta.env.VITE_BLOG_BRANCH;
      const list = await getContentFromWeb(`${baseUrl}/${branch}/about.json`);
      setBlogList(list);
    } catch (error) {
    } finally {
      setIsWaitOver(true);
    }
  };

  // update blogList, before page loading
  useEffect(() => {
    updateBlogList();
  }, []);

  return (
    <>
      <title>Blogs | Shakti Ranjan Debata</title>
      <meta
        name="description"
        content="Read my blog for insights on backend development, coding tutorials, and best practices in programming and system design."
      />
      <BlogBadge />
      <div className="min-height blog-home">
        {isWaitOver && blogList.length === 0 ? (
          <NoInternet />
        ) : (
          <div style={{ maxWidth: "65rem", marginInline: "auto" }}>
            {blogList.map((item, index) => (
              <BlogCard info={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

/*  BlogCard sub component, it render Blog title, about, author, date & read more button,
    And whole card is clickable. */
const BlogCard = (props) => {
  const info = props.info;
  return (
    <div className="blog-card">
      <Link to={info.slug}>
        <h2 className="accent">{info.title}</h2>
        <p>{info.about}</p>
        <div className="flex blog-card-footer accent">
          <div className="blog-card-left flex">
            <div className="icon-provider">
              <User size={20} weight="fill" /> {info.author}
            </div>
            <div className="icon-provider">
              <CalendarDots size={20} weight="fill" /> {info.date}
            </div>
          </div>
          <div>
            <div className="accent icon-provider">
              Read More <BookOpen size={20} weight="fill" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const NoInternet = () => {
  return (
    <div className="no-internet flex">
      <img
        src="/static/no-internet.png"
        className="no-internet-image"
        alt="No Internet"
      />
      <div className="main-heading accent">Oops!</div>
      <div className="flex no-internet-text">
        <div>There's maybe some network issues on your side.</div>
        <div>Try changing your DNS settings or network.</div>
      </div>
    </div>
  );
};

export const BlogBadge = () => {
  return (
    <div className="blog-badge">
      This blog section is no more maintained
      <p>
        Please visit{" "}
        <a href="https://destructure.in/" className="underline" target="_blank">
          destructure.in
        </a>
      </p>
    </div>
  );
};
