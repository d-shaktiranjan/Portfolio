import { useEffect } from "react";

const updateMetaTag = (attribute, value, content) => {
  if (!content) {
    return;
  }

  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

export const usePageMetadata = ({
  title,
  description,
  ogTitle,
  ogDescription,
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    updateMetaTag("name", "description", description);
    updateMetaTag("property", "og:title", ogTitle ?? title);
    updateMetaTag("property", "og:description", ogDescription ?? description);
  }, [description, ogDescription, ogTitle, title]);
};
