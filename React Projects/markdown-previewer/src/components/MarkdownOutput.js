import React from 'react';
import marked from 'marked';
import Parser from 'html-react-parser';

const MarkdownOutput = (props) => {
  console.log(marked(props.text));
  return (
    <div className="markdownOutput">
      {Parser(marked(props.text))}
    </div>
  )
}

export default MarkdownOutput;