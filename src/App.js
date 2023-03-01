// import logo from './logo.svg';
import Aboutus from './Aboutus';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';

function App() {
  return (
    <>
   <Navbar />
   <div className="container">
   <Textform />
   </div>
   <div className='container my-5'>
<Aboutus/>
   </div>
</>
  );
}

export default App;
