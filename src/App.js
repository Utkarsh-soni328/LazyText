import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React,{useState} from "react";
function App() {
  const[mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#212529';
    }
    else
    {setMode('light');
    document.body.style.backgroundColor = 'white';
  }

  }
  return (
    <>
      <Navbar n1="Home" n2="Menu" n3="Reviews" n4="Contact us" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter Text" mode={mode}/>
    <About mode={mode}/>
    </>
  );
}

export default App;
