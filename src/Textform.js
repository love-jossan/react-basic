import React, { useState } from 'react'

export default function Textform() {
  const [text, setText] = useState("enter text here");
  const handleUp = () => {
    let newText = text.toUpperCase();
    console.log("enter the text")

    setText(newText)
  }
  const handleChange = (event) => {
    setText(event.target.value)

  }
 const removeSpace=()=>{
  let spaceText=text.split(/[ ]+/)
  setText(spaceText.join(" "))
 }

  return (
    <>
    <div>
        <div className="mb-3">
          <h1>Enter Text </h1>
          <textarea className="form-control" value={text} onChange={handleChange} id="mybox" rows="3"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUp}>Covert uppercase
        </button> <span><b>{text.split(" ").length}</b> word  and characters <b>{text.length}</b> </span>
        <button className='btn btn-primary' onClick={removeSpace}>Remove Extra Space</button>
    
        </div>
        </>
  
  )
}
