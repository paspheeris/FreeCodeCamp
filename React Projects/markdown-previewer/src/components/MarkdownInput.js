import React from 'react';

const MarkdownInput = (props) => {
  // console.log(props);
  return (
    <div className="markdownInput">
      <textarea className="textInput" 
                type="text"
                defaultValue={props.text}
                onChange={props.changeHandler}
                >
      </textarea>
    </div>
  )
}

export default MarkdownInput;