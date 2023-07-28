import React,{useState} from 'react';
import copy from 'copy-to-clipboard';
import fileDownload from 'js-file-download';

export default function Textform(props) {
  const handlechange=(event)=>{

      settext(event.target.value);

  }
  const touppercase=(e)=>{
    e.preventDefault();
      let new_text=text.toUpperCase();
      settext(new_text);
  }
  const copytoclipboard=(e)=>{
    e.preventDefault();
      copy(text);
  }
  const toclear=(e)=>{
    e.preventDefault();
      let new_text='';
      settext(new_text);
  }
  const tolowercase=(e)=>{
    e.preventDefault();
    let new_text=text.toLowerCase();
    console.log("lowercase was clicked");
    settext(new_text);
}
const tocapitalize=(e)=>{
  e.preventDefault();
  let new_text=text[0].toUpperCase();;
  for(let i=1;i<text.length;i++){
  if(text[i]===' '){
    
    new_text=new_text+" "+text[i+1].toUpperCase();
    i++;
  }
  else{
  new_text+=text[i];
  }
  }
settext(new_text);
 
}

const todownload=(e)=>{
  e.preventDefault();
  fileDownload(text, 'text.txt');
}


    const [text,settext]=useState('');
    
    return (
<>
<div className='main' style={{marginRight:"25%",marginLeft:"25%"}}>
<form align="center" >
<div class="form-group my-2" align="left">
    <label for="exampleFormControlTextarea1" ><h3>Enter the text </h3> </label>
    
  
    <textarea class="form-control" value={text} onChange={handlechange} id="exampleFormControlTextarea1"  rows="7"></textarea>
  </div>
 
<div class="form-group d-flex justify-content-start" align="left" >
<button className='btn btn-primary my-3' onClick={touppercase}>Uppercase</button>
<button className='btn btn-primary my-3 ms-2' onClick={tolowercase}>Lowercase</button>
<button className='btn btn-primary my-3 ms-2' onClick={tocapitalize}>Capitalize</button>
<button className='btn btn-primary my-3 ms-2' onClick={todownload}><svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
</button>
<button className='btn btn-primary my-3 ms-2' onClick={copytoclipboard}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
</button>
<button className='btn btn-primary my-3 ms-2' onClick={toclear}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
  <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
</svg>
</button>
   
   </div>
<div class="form-group" align="left" >
   <h5 className='mt-2'>{text.split(" ").length-1} words and {text.length} characters, {((text.split(" ").length-1)*0.008).toFixed(2)} min Read</h5>
</div>
</form>
<div className='output' >

</div>

</div>

</>
    )
}

