import React, { useReducer } from 'react'
import ComponentA from './ContextWithReducer/ComponentA'
import ComponentB from './ContextWithReducer/ComponentB'
import ComponentC from './ContextWithReducer/ComponentC'
// import CounterThree from './useReducer/CounterThree'
// import CounterTwo from './useReducer/CounterTwo'
// import CounterOne from './useReducer/CounterOne'

export const CountContext = React.createContext()

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

function Reducer() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div>
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div >
    </CountContext.Provider>
  )
}

export default Reducer
