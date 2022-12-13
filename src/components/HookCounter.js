import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount( previousCount => previousCount + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter
