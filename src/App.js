// import logo from './logo.svg';
import Aboutus from './Aboutus';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState("white");
   const toggleMode=()=>{
    if(mode==='white'){
      setMode('dark')
    }
    else{
      setMode('white')
    }
   }
  return (
    <>
   <Navbar  mode={mode} toggleMode={toggleMode}/>
   <div className="container" >
   <Textform />
   </div>
   <div className='container my-5'>
<Aboutus/>
   </div>
</>
  );
}

export default App;
