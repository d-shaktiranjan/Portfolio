// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../style/blog.css";
import noInternetIcon from "../../static/no-internet.png";
import blogList from "../../data/blog/about.json";

export const BlogHome = () => {
  return (
    <div className="min-height blog-home">
      {blogList.length === 0 ? (
        <NoInternet />
      ) : (
        <div>
          {blogList.map((item, index) => (
            <BlogCard info={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

/*  BlogCard sub component, it render Blog title, about, author, date & readmore button,
    And whole card is clickable. */
const BlogCard = (props) => {
  document.title = "Blogs | Shakti Ranjan Debata";
  const info = props.info;
  return (
    <div className="blog-card">
      <Link to={info.slug}>
        <h2 className="accent">{info.title}</h2>
        <p>{info.about}</p>
        <div className="flex blog-card-footer accent">
          <div className="blog-card-left flex">
            <div>
              <i className="fa-solid fa-user accent"></i> {info.author}
            </div>
            <div>
              <i className="fa-solid fa-calendar-days accent"></i> {info.date}
            </div>
          </div>
          <div>
            <div className="accent">
              Read More <i className="fa-solid fa-book-open"></i>
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
        src={noInternetIcon}
        className="no-internet-image"
        alt="No Internet"
      />
      <div className="main-heading accent">Ooops!</div>
      <div className="flex no-internet-text">
        <div>There&apos;s maybe some network issues on your side.</div>
        <div>Try changing your DNS settings or network.</div>
      </div>
    </div>
  );
};
