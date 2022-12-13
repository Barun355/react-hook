import React, { useState } from 'react'

export default function HookCounterTwo() {
    const intitalState = 0
    const [count, setCount] = useState(intitalState)
    return (
        <div>
            count : {count}
            <button onClick={ () => setCount(intitalState) }>Reset</button>
            <button onClick={ () => setCount(count + 1) }>Increment</button>
            <button onClick={ () => setCount(count - 1) }>Decrement</button>
        </div>
    )
}
