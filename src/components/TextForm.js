import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked." + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!", "success")
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log("On Change")
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied successfully!", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed successfully.", "success")
  }

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode === 'light'?'white':'black',color:props.mode === 'light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>
          No. of words : {text.split(" ").length - 1} 
          <br /> 
          No. of characters : {text.length}
          <br />
          No. of paragraphs : {text.split("\n").length}
        </p>
        <p>Estimated Reading time : {0.008 * (text.split(" ").length - 1)}</p>
        <h2 className="my-2">Preview</h2>
        <p className="border-top">{text.length>0?text:"Enter something in the textarea to preview it here."}</p>
      </div>
    </>
  );
}
