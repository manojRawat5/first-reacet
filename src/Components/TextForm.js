import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("You clicked on UpperCase Button "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('All Text converet into Uppercase','success : ')
    }   

    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("All text converted into Lowercase","success : ")
    }

    const handleClearClick = ()=>{
      let newText ='';
      setText(newText);
      props.showAlert("Cleared all Textarea",'success : ')
    }

    const handleOnChange = (event)=>{
        // console.log("i am handleOnChange");
        setText(event.target.value);
    }

    const handleCopy = () =>{
      let text = document.getElementById("textArea");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Text cipited in clickboard','success : ')
    }

    const handleExtraSpaces =()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Removed all extra spacess",'success : ')
    }

    const[text , setText] = useState(""); 
    // setText = "lfdsjfkfkf fdskf";
  return (
    <>
    <div className="container my-4" style={{color :props.mode=== 'dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
<div className="mb-3">
<textarea className="form-control" style={{backgroundColor :props.mode=== 'dark'?'gray':'white', color :props.mode==='dark'?'white':'black'}} placeholder='Enter your text' onChange={handleOnChange} value={text} id="textArea" rows="5"></textarea>
</div>
<button className="btn btn-danger mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-danger mx-4" onClick={handleLoClick}>Convert To LowerCase</button>
<button className="btn btn-warning mx-4" onClick={handleClearClick}>Clear all Text</button>
<button className="btn btn-warning mx-4" onClick={handleCopy}>Copy all Text</button>
<button className="btn btn-warning mx-4" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-4" style={{color :props.mode=== 'dark'?'white':'black'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
   {/* in  1 minutes can read 125 words  */}
   <p>{0.008 * text.split("").length} Minutes to read</p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
</div>
   </>
  )
}
