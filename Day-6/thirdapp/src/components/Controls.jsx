import React from 'react'

function Controls({onIncrement}) {
  return (
    <div>
      <button onClick={onIncrement}> Increment Count</button>
    </div>
  )
}

export default Controls
