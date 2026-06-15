import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { cb } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeHighlighter = ({ code, language }) => {
  return (
    <SyntaxHighlighter id="rawCode" language={language} style={cb} wrapLines>
      {code}
    </SyntaxHighlighter>
  );
};
