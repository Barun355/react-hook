import React, { useEffect, useState } from 'react'

function HookEffectCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `clicked ${count}`
    })

  return (
    <div>
      <button onClick={() => setCount( prevCount => prevCount + 1)}>click {count}</button>
    </div>
  )
}

export default HookEffectCounter
