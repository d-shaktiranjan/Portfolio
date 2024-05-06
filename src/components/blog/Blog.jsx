// react hooks imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// utils & style imports
import { getContentFromWeb } from "../../utils/blog";
import "../../style/blog.css";

// components imports
import { NoMatch } from "../NoMatch";
import { BlogPart } from "./BlogPart";
import { BlogLoading } from "./BlogLoading";
import { BlogBadge } from "./BlogHome";

export const Blog = () => {
  const params = useParams();

  // state variables
  const [blogContent, setBlogContent] = useState({ order: [] });
  const [blogData, setBlogData] = useState({});
  const [waitComplete, setWaitComplete] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  // env variables
  const branch = import.meta.env.VITE_BLOG_BRANCH;
  const baseUrl = import.meta.env.VITE_BLOG_BASE_URL;

  //  fetch blog list from web
  const updateBlogList = async () => {
    const list = await getContentFromWeb(`${baseUrl}/${branch}/about.json`);
    list.map((item) => {
      if (item.slug === params.slug) {
        setBlogData(item);
      }
    });
    setWaitComplete(true);
  };

  // get blog content from gist link
  const getBlog = async () => {
    const fileLink = `${baseUrl}/${branch}/${blogData.filePath}/blog.json`;
    const data = await getContentFromWeb(fileLink);

    // set 250ms delay to show react-skeleton-loading
    setTimeout(() => {
      setBlogContent(data);
      setIsLoadingComplete(true);
    }, 250);
  };

  // update blog list before load the page
  useEffect(() => {
    updateBlogList();
  }, []);

  // update blogContent after blogData fetched
  useEffect(() => {
    getBlog();
  }, [blogData]);

  // if slug is invalid show NoMatch component
  if (!blogData && waitComplete) {
    return <NoMatch />;
  }

  document.title = isLoadingComplete
    ? `${blogContent.title} | Shakti Ranjan Debata`
    : `Blog | Shakti Ranjan Debata`;
  return (
    <div className="container min-height blog-content">
      <BlogBadge />
      {isLoadingComplete ? (
        <>
          <h1 className="accent underline">{blogContent.title}</h1>
          <div className="blog-card-left flex accent">
            <span>
              <i className="fa-solid fa-user"></i> {blogContent.authorName}
            </span>
            <span>
              <i className="fa-solid fa-calendar-days"></i>{" "}
              {blogContent.releaseData}
            </span>
          </div>
          {Object.keys(blogContent.blogContent).map((item) => (
            <BlogPart itemName={item} value={blogContent.blogContent[item]} />
          ))}
        </>
      ) : (
        <BlogLoading />
      )}
    </div>
  );
};
