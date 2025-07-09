import React, { useEffect, useState } from 'react'
import Message from './Message';

function Parent() {

    const [parentCount , setParentCount] = useState(0);
    const[messageText , setMessageText] = useState("");
    useEffect(()=>{
        const interval =setInterval( () =>
            { setParentCount(prev => prev +1);},1000);
            return () => clearInterval(interval);    
        },[]);
  return (
    <div>
      <h2>Parent Render Count: {parentCount}</h2>
      <button onClick={()=>setMessageText("New Message!")}>Change message test</button>
        <Message text ={messageText} count={parentCount}></Message>
        <Message text ={"Static Message"} count={0} ></Message>

    </div>
  )
}

export default Parent
