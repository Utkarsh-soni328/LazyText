import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleupclick = ()=>
    {
        console.log("button clicked");
        let newText=text.toUpperCase();
        setText(newText);
   
    }
    const handlecopy = ()=>{
      var text = document.getElementById("my-box");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleloclick = ()=>
    {
        console.log("button clicked");
        let newText=text.toLowerCase();
        setText(newText);
   
    }
    const handlespeech = () =>{
      const Speech= new SpeechSynthesisUtterance();
      const message= document.getElementById("my-box").value;
      Speech.lang='eng';
      Speech.text= message;
      window.speechSynthesis.speak(Speech);
    }
    const handlleonchange = (event)=>
    {
        setText(event.target.value);
    }
    const [text,setText] = useState("enter text here");  
    // 
    return (
    <>
        <div className="container"  style={{color: props.mode==='light'?'black':'white'}}>
        <h1><b>{props.heading}</b></h1>
      <div className="mb-3" >
  <textarea style={{backgroundColor : props.mode==='light'?'white':'grey'}} class="form-control"  value={text} onChange={handlleonchange} className='h-1000 w-100 border-2 border-black ' placeholder="Leave a comment here" id="my-box" rows="8" ></textarea>
</div>
<button className="btn btn-primary mr-3" onClick={handlespeech}>speak</button>
<button className="btn btn-primary mr-3" onClick={handleupclick}>Convert to uppercase</button>
<button className="btn btn-primary mr-3" onClick={handleloclick}>Convert to lowercase</button>
<button className="btn btn-primary mr-3" onClick={handlecopy}>Copy text</button>

    </div>
    < div className="container my-3"  style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read.</p>
      <h1><b>Preview</b></h1>
      <p style={{backgroundColor : props.mode==='light'?'white':'grey'}} className="border-x-2 border-y-2 rounded border-black">{text}</p>
      
    </div>
        
    </>
  )
}


