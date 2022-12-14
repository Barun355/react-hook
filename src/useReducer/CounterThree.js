import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTow, dispatchTow] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                <div>Count -&gt; {count}</div>
                <button type='button' onClick={() => dispatch('increment')} >Increment</button>
                <button type='button' onClick={() => dispatch('decrement')} >Decrement</button>
                <button type='button' onClick={() => dispatch('reset')} >Reset</button>
            </div>
            <div>
                <div>Count -&gt; {countTow}</div>
                <button type='button' onClick={() => dispatchTow('increment')} >Increment</button>
                <button type='button' onClick={() => dispatchTow('decrement')} >Decrement</button>
                <button type='button' onClick={() => dispatchTow('reset')} >Reset</button>
            </div>
        </>
    )
}

export default CounterOne
