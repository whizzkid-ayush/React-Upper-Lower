//rfc
import React,{useState} from 'react'



export default function TextForm() {
    const [text, setText] =  useState('Enter Text Here');
    // text = "new  text"              //wrong way to change the state 
    //Updation Function
    // settext( "new  text" );        // wrong way to change the state\


    const handleUpClick = ()=>{
        //console.log("Upper Case was CLicked " + text);
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        //console.log("Lower Case was CLicked " + text);
        let newText1 = text.toLowerCase();
        setText(newText1 )
    }

   

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    


  return (
    
    <div>
        
  <h1>Enter The Txt Below to Analyse </h1>
  <div className="mb-3">
    <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>

<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
</div>
  )
}
