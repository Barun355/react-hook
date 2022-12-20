import React, { useContext } from 'react'
import { CountContext } from '../Reducer'

function ComponentA() {
    const { countDispatch } = useContext(CountContext)
    return (
        <div>
            Component A
            <button type='button' onClick={() => countDispatch('increment')} >Increment</button>
            <button type='button' onClick={() => countDispatch('decrement')} >Decrement</button>
            <button type='button' onClick={() => countDispatch('reset')} >Reset</button>
        </div>
    )
}

export default ComponentA
