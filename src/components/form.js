

import React, {useState} from 'react'


export default function Form(props) {

    var [text,settext] = useState("Enter text here");   
  
    const  upperfun= () =>{
       settext(text.toUpperCase())
       props.showalert("Converted to upper case", "Success")
    }

    const  lowerfun= () =>{
       settext(text.toLowerCase())
       props.showalert("Converted to Lower case", "Success")

    }

    const  clearfun= () =>{
      settext(" ")
         
      }

      console.log(text)

    const  handleonchange= (event) =>{
        console.log("on change");
        settext(event.target.value)
    }


    console.log(text)
    
   
    // here text is a state
    // text = "newtext"  wrong way of changing state
    // settext("newtext")  right way of updating
  return (  
    <div className='container my-3'>
          <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}><h1 className='my-3 mt-5 text-center'>Enter text to analyze</h1></div>

        <div className="mb-3">      
        <textarea className="form-control" onChange={handleonchange} value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button className='btn btn-primary' onClick={upperfun} >UpperCase</button>
        <button className='mx-2 btn btn-primary' onClick={lowerfun}>LowerCase</button>
        <button className='mx-2 btn btn-primary' onClick={clearfun}>Clear</button>
     
     <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h3 className='my-3'>Text Summary</h3>
        <p> Total words = {text.split(" ").length} </p>
        <p> Total characters = {text.length} </p>
        <p> {0.004*text.split(" ").length}min Average Reading Time </p>

        </div>
</div>  
   
  )
}
