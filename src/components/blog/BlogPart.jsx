import { Suspense, lazy, useEffect, useState } from "react";
import { getContentFromWeb } from "../../utils/blog";

const CodeHighlighter = lazy(() =>
  import("./CodeHighlighter").then((module) => ({
    default: module.CodeHighlighter,
  })),
);

const CodeBlock = ({ path, language, isLocal, baseUrl, branch }) => {
  const [code, setCode] = useState("");
  const [isShowCheck, setIsShowCheck] = useState(false);

  useEffect(() => {
    const fetchCode = async () => {
      const source = isLocal ? `${baseUrl}/${branch}/${path}` : path;
      const nextCode = await getContentFromWeb(source, false);
      setCode(nextCode);
    };

    fetchCode();
  }, [baseUrl, branch, isLocal, path]);

  const copyToClipboard = async () => {
    if (!code) {
      return;
    }

    await navigator.clipboard.writeText(code);
    setIsShowCheck(true);
    setTimeout(() => setIsShowCheck(false), 4000);
  };

  return (
    <div className="code-in-side">
      <button
        type="button"
        className="copy-to-clipboard"
        onClick={copyToClipboard}
      >
        {isShowCheck ? (
          <i className="fa-solid fa-check accent"></i>
        ) : (
          <i className="fa-regular fa-clipboard"></i>
        )}
      </button>
      <Suspense fallback={<pre id="rawCode">{code}</pre>}>
        <CodeHighlighter code={code} language={language} />
      </Suspense>
    </div>
  );
};

export const BlogPart = (props) => {
  // env variables
  const branch = import.meta.env.VITE_BLOG_BRANCH;
  const baseUrl = import.meta.env.VITE_BLOG_BASE_URL;

  // checking item type & render components accordingly
  const type = props.itemName.split("-")[0];
  // if type is text render in div
  if (type === "text") {
    return <div>{props.value}</div>;
  }

  if (type === "textSpan") {
    return <span>{props.value}</span>;
  }

  if (type === "heading") {
    return <h3 className="accent blog-heading">{props.value}</h3>;
  }

  // if type is image, then fetch image & render
  if (type === "image") {
    if (props.value[1]) {
      const localPath = `${baseUrl}/${branch}/${props.value[0]}`;
      return (
        <img className="blog-image" src={localPath} alt="Unable to load" />
      );
    }
    return (
      <img className="blog-image" src={props.value} alt="Unable to load" />
    );
  }

  // if type is code, then fetch code & place inside SyntaxHighlighter tag
  if (type === "code") {
    return (
      <CodeBlock
        path={props.value[0]}
        language={props.value[1]}
        isLocal={props.value[2]}
        baseUrl={baseUrl}
        branch={branch}
      />
    );
  }

  // checking for list type
  if (type === "list") {
    const { type, data } = props.value;

    if (type === "ul") {
      return (
        <ul className="list-view">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else if (type === "ol") {
      return (
        <ol className="list-view">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      );
    } else {
      // Handle other cases if necessary
      return <div>Unsupported list type: {type}</div>;
    }
  }

  if (type === "link") {
    return (
      <a
        href={props.value[1]}
        target="_blank"
        rel="noreferrer"
        className="accent"
      >
        {props.value[0]}
      </a>
    );
  }

  return <p>{props.value}</p>;
};
