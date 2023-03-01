import React ,{useState}from 'react'

export default function Aboutus() {
  const [mystyle, setMyStyle] = useState({
    color:'white',
    background:'black'
  });
   const [Btn, setBtn] = useState("White Mode");
  const toggleMode=()=>{
    if(mystyle.color==='white'){
      setMyStyle({
        color:'black',
        background:'white'
      });
      setBtn("Dark Mode")
    }
    else{
      setMyStyle({
        color:'white',
        background:'black'
      });
      setBtn("White  Mode")
    }
  }
  return (
    <div>
   <div class="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
  <div class="accordion-item" >
    <h2 class="accordion-header" id="flush-headingOne">
      <button style={mystyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header" id="flush-headingTwo">
      <button style={mystyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header" id="flush-headingThree">
      <button style={mystyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
    <button onClick={toggleMode} className='btn btn-primary my-3' >{Btn}</button>
  </div>
</div>
    </div>
  )
}