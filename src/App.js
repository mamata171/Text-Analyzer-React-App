
import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import Counter from './components/state_demo';
import About from './components/about';
import React,{useState} from 'react';


let name = 'mentoons'
function App() {  
  const [mode,setmode] = useState('light')

  function toggleMode(){
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'grey';

    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'

    }
  }


  return (
  <>
{/* here title and about are props  */}
    <Navbar title = "TextUtils" about = "About TextUtils" mode = {mode} toggleMode = {toggleMode}/> 
    <About/>
    <div className='mt-0'><h1 className='my-3 mt-5 text-center'>Enter text to analyze</h1></div>
    <Form/>
    </>
  );
}   

export default App;
