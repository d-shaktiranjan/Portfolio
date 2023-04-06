import React, { useState } from 'react';
import { getContentFromWeb } from '../../utils/blog';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const BlogPart = (props) => {

    // env variables
    const branch = import.meta.env.VITE_BLOG_BRANCH;
    const baseUrl = import.meta.env.VITE_BLOG_BASE_URL;

    // state variables
    const [code, setCode] = useState();
    const [isShowCheck, setIsShowCheck] = useState(false);

    // fetch code from BlogData repo
    const fetchCode = async (path, isLocal) => {
        if (!isLocal) {
            const code = await (await getContentFromWeb(path)).text();
            setCode(code);
        } else {
            const code = await (await getContentFromWeb(`${baseUrl}/${branch}/${path}`)).text();
            setCode(code);
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setIsShowCheck(true);
        setTimeout(() => setIsShowCheck(false), 4000);
    }

    // checking item type & render components accoordingly
    const type = props.itemName.split("-")[0];
    if (type === "text") {
        return (
            <div>{props.value}</div>
        )
    }
    if (type === "textSpan") {
        return (
            <span>{props.value}</span>
        )
    }
    if (type === "heading") {
        return (
            <h3 className='accent blog-heading'>{props.value}</h3>
        )
    }
    if (type === "image") {
        if (props.value[1]) {
            const localPath = `${baseUrl}/${branch}/${props.value[0]}`;
            return (
                <img className='blog-image' src={localPath} alt="Unable to load" />
            )
        }
        return (
            <img className='blog-image' src={props.value} alt="Unable to load" />
        )
    }
    if (type === "code") {
        fetchCode(props.value[0], props.value[2]);
        return (
            <div className='code-in-side'>
                <div className='copy-to-clipboard' onClick={copyToClipboard}>
                    {
                        isShowCheck ? <i className="fa-solid fa-check accent"></i> : <i className="fa-regular fa-clipboard"></i>
                    }
                </div>
                <SyntaxHighlighter id="rawCode" language={props.value[1]} style={cb} wrapLines={true}>
                    {code}
                </SyntaxHighlighter>
            </div>
        )
    }
    if (type === "link") {
        return (
            <a href={props.value[1]} target="_blank" className='accent'>{props.value[0]}</a>
        )
    }
    return (
        <p>{props.value}</p>
    )
}
