
import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import Counter from './components/state_demo';
import About from './components/about';
import React,{useState} from 'react';
import Alert from './components/alert';
import { Routes, Route } from "react-router-dom"



let name = 'mentoons'
function App() {  
  const [mode,setmode] = useState('light')
  const [alert, setalert] = useState(null)

  function showalert(message,type)
  {
      setalert({
        msg : message,
        type : type
      })

      setTimeout(()=>{
        setalert(null)
      },1500)
  }

  function toggleMode(){
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#212529';
      showalert("Dark mode has been enabled","Success")
      document.title ="TextUtils - Dark Mode"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light mode has been enabled","Success")
      document.title ="TextUtils - Light Mode"
    }
  }


  return (
  <>

<Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
      <Routes>
        <Route path="/" element={ <Form/> } />
        <Route path="/about" element={ <About/> } />
  
      </Routes>
      
    

</>
  );
}   

export default App;
