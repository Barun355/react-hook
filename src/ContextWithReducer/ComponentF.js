import React, { useContext } from 'react'
import { CountContext } from '../Reducer'

function ComponentF() {
    const { countDispatch } = useContext(CountContext)
    return (
        <div>
            Component F
            <button type='button' onClick={() => countDispatch('increment')} >Increment</button>
            <button type='button' onClick={() => countDispatch('decrement')} >Decrement</button>
            <button type='button' onClick={() => countDispatch('reset')} >Reset</button>
        </div>
    )
}

export default ComponentF
