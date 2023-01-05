export const fetchBlogList = () => {
    const data = require("../data/blogData.json");
    return data;
}

// fetch content from web & return in string
export const getContentFromWeb = async (fileLink) => {
    const data = await fetch(fileLink);
    return data.text();
}