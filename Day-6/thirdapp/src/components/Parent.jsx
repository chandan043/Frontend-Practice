import React, { useState } from 'react'
import Display from './Display';
import Controls from './Controls';

function Parent() {
    const [count , setCount] =useState(0);
    function increaseCount(){
        setCount(prev => prev +1);
    }

  return (
    <div>
        <div>
            <h3>Parent Component</h3>
            {
                <Display count = {count}></Display>
            }
            <Controls onIncrement ={increaseCount}></Controls>
        </div>
      
    </div>
  )
}

export default Parent
