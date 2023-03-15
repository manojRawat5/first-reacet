import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react'
import Alert from './Components/Alert';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  const [mode,setMode] = useState('light');
  
  const [darkMode,setDarkMode] = useState("Enable Dark Mode");
  
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      setDarkMode("Disable Dark Mode");
      showAlert("Dark mode has been enabled ","success : ");
      document.title = "TextBelong - Dark Mode"
      // setInterval(() =>{

      // },2000)
    }else{
      setMode('light')
      document.body.style.backgroundColor="white" 
      setDarkMode('Enable Dark Mode')
      showAlert("Dark mode has been disabled ","success : ");
      document.title = "TextBelong - Home"
      // setInterval(() =>{

      // },1500)
    }
  }
  

  const[alert,setAlert] = useState(null);
  
  const showAlert = (message,type) =>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() =>{
    setAlert(null)
  },1500)

  }
  return (
    <>
    <BrowserRouter>
    {/* <Navbar title="Product" about='About Us'/> */}
    {/* <Navbar/> */}
    <Navbar title="Product" mode={mode} toggleMode={toggleMode} darkMode={darkMode}/>
    <Alert alert={alert} />

    <div className="container "> 
    <Routes>
      <Route exact path="/about" element={<About mode={mode}/> } />
      <Route exact path="/" element={<TextForm heading="Enter any Text you want to see" mode={mode} showAlert={showAlert}/>} />
    </Routes>

  {/* <TextForm heading="Enter any Text you want to see" mode={mode} showAlert={showAlert}/> */}
  {/* <About/> */}

     </div> 
  </BrowserRouter>
   </>
  );
}

export default App;
