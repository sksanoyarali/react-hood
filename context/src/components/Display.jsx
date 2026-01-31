import React, { useContext } from 'react'
import { CounterContext } from '../App'
const Display = () => {
  const { count } = useContext(CounterContext)
  return (
    <div>
      <h1>I am displaying count:{count}</h1>
    </div>
  )
}

export default Display
