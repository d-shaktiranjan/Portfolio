// react hooks imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// utils & style imports
import { getContentFromWeb } from "../../utils/blog";
import "../../style/blog.css";
import { CalendarDots, User } from "@phosphor-icons/react";

// components imports
import { NoMatch } from "../NoMatch";
import { BlogPart } from "./BlogPart";
import { BlogLoading } from "./BlogLoading";
import { BlogBadge } from "./BlogBadge";
import { usePageMetadata } from "../../hooks/usePageMetadata";

export const Blog = () => {
  const params = useParams();

  // state variables
  const [blogContent, setBlogContent] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [waitComplete, setWaitComplete] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [hasLoadError, setHasLoadError] = useState(false);

  // env variables
  const branch = import.meta.env.VITE_BLOG_BRANCH;
  const baseUrl = import.meta.env.VITE_BLOG_BASE_URL;

  //  fetch blog list from web
  const updateBlogList = async () => {
    try {
      setWaitComplete(false);
      setHasLoadError(false);
      setBlogData(null);
      setBlogContent(null);
      setIsLoadingComplete(false);
      const list = await getContentFromWeb(`${baseUrl}/${branch}/about.json`);
      const matchedBlog =
        list.find((item) => item.slug === params.slug) ?? null;
      setBlogData(matchedBlog);
    } finally {
      setWaitComplete(true);
    }
  };

  // get blog content from gist link
  const getBlog = async () => {
    if (!blogData?.filePath) {
      return;
    }

    try {
      const fileLink = `${baseUrl}/${branch}/${blogData.filePath}/blog.json`;
      const data = await getContentFromWeb(fileLink);

      // set 250ms delay to show react-skeleton-loading
      setTimeout(() => {
        setBlogContent(data);
        setIsLoadingComplete(true);
      }, 250);
    } catch (error) {
      setHasLoadError(true);
    }
  };

  // update blog list before load the page
  useEffect(() => {
    updateBlogList();
  }, [baseUrl, branch, params.slug]);

  // update blogContent after blogData fetched
  useEffect(() => {
    if (!blogData?.filePath) {
      return;
    }

    getBlog();
  }, [blogData, baseUrl, branch]);

  // if slug is invalid show NoMatch component
  if (blogData === null && waitComplete) {
    return <NoMatch />;
  }

  if (hasLoadError) {
    return <NoMatch />;
  }

  const description = blogContent
    ? `${blogContent.title} - ${blogContent.description}`
    : "Read blog posts by Shakti Ranjan Debata on backend development and software engineering.";

  usePageMetadata({
    title: isLoadingComplete
      ? `${blogContent.title} | Shakti Ranjan Debata`
      : "Blog | Shakti Ranjan Debata",
    description,
    ogTitle: blogContent?.title,
    ogDescription: description,
  });

  return (
    <>
      <BlogBadge />
      <div className="container min-height blog-content">
        {isLoadingComplete ? (
          <>
            <h1 className="accent underline">{blogContent.title}</h1>
            <div className="blog-card-left flex accent">
              <span className="icon-provider">
                <User size={20} weight="fill" /> {blogContent.authorName}
              </span>
              <span className="icon-provider">
                <CalendarDots size={20} weight="fill" />{" "}
                {blogContent.releaseData}
              </span>
            </div>
            {Object.keys(blogContent.blogContent).map((item) => (
              <BlogPart
                key={item}
                itemName={item}
                value={blogContent.blogContent[item]}
              />
            ))}
          </>
        ) : (
          <BlogLoading />
        )}
      </div>
    </>
  );
};
