import React from 'react'

const Message = React.memo(function Message({ test, count }) {
    console.log("Message Component Rendered!");
  return (
    <div>
      {test} - Render count for this message: {count}
    </div>
  )
})
export default Message
