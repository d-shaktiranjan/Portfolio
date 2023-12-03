// react hooks imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// style imports
import "../../style/blog.css";

// components imports
import { NoMatch } from "../NoMatch";
import { BlogPart } from "./BlogPart";
import { BlogLoading } from "./BlogLoading";

import blogList from "../../data/blog/about.json";

export const Blog = () => {
  const params = useParams();

  // state variables
  const [blogContent, setBlogContent] = useState({ blogContent: {} });
  const [blogData, setBlogData] = useState({});
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  // env variables
  const branch = import.meta.env.VITE_BLOG_BRANCH;

  //  fetch blog list from web
  const updateBlogList = async () => {
    blogList.map((item) => {
      if (item.slug === params.slug) {
        setBlogData(item);
      }
    });
  };

  // update blog list before load the page
  useEffect(() => {
    updateBlogList();
  });

  // update blogContent after blogData fetched
  useEffect(() => {
    const getBlog = async () => {
      try {
        const path = `../../data/blog/${blogData.filePath}/blog.json`;
        const fileLink = await import(path);
        const data = await fileLink.default;

        // set 250ms delay to show react-skeleton-loading
        setTimeout(() => {
          setBlogContent(data);
          setIsLoadingComplete(true);
        }, 250);
      } catch (error) {
        setIsLoadingComplete(true);
      }
    };

    getBlog();
  }, [blogData, branch]);

  // if slug is invalid show NoMatch component
  if (!blogData) {
    return <NoMatch />;
  }

  document.title = isLoadingComplete
    ? `${blogContent.title} | Shakti Ranjan Debata`
    : `Blog | Shakti Ranjan Debata`;
  return (
    <div className="container min-height blog-content">
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
          {Object.keys(blogContent.blogContent).map((item, index) => (
            <BlogPart
              itemName={item}
              value={blogContent.blogContent[item]}
              key={index}
            />
          ))}
        </>
      ) : (
        <BlogLoading />
      )}
    </div>
  );
};
