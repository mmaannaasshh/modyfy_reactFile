import React from 'react'
import { useState } from 'react'

export default function TextBox(props) {
const [text, settext] = useState('Enter Text Here')

const upper=()=>{
    let newText=text.toUpperCase();
    settext(newText)
    props.showalert('messege','primary');
}
const lower=()=>{
    let newText=text.toLowerCase();
    settext(newText)
}
const clear=()=>{
    let newtext='';
   settext(newtext)

}
const changeHandler=(event)=>{
    settext(event.target.value)

}
const remove=()=>{
   let newText=text.split(/[ ]+/)
   settext(newText.join(' '))

}
    return (
        <div style={{color: props.mode==='light'?'black':'white'}}>
            <div className="form-floating my-4 container " >
                <h3 className='mb-3'>{props.heading}</h3>
                <textarea  style={{background: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white',height:'200px'}} className="form-control"  value={text} onChange={changeHandler} placeholder="Leave a comment here" ></textarea>
                <button className="btn btn-primary my-3 mx-3" onClick={upper}>Click to upperCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={lower}>Click to lowerCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={clear}>Click to clear</button>
                <button className="btn btn-primary my-3 mx-3" onClick={remove}>Remove extra space</button>
            </div>
            <div className="container">
                <p> {text.split(" ").length} </p>  <p>{text.length}</p>
            </div>
            
        </div>
    )
}
