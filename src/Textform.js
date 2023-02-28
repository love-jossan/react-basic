import React,{useState} from 'react'

export default function Textform() {
  const [text, setText] = useState("enter text here");
  const handleUp=()=>{
console.log("enter the text")
setText("change the text")
}
 const handleChange=(event)=>{
  setText(event.target.value)

}

  return (
    <div>
   
<div className="mb-3">
 <h1>Enter Text-{text}</h1>
  <textarea className="form-control" value={text} onChange={handleChange} id="mybox" rows="3"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUp}>Covert uppercase</button>
    </div>
  )
}
