import { useContext } from 'react'
import { CounterContext } from '../App'

const Counter = () => {
  const { count, setCount } = useContext(CounterContext)
  return (
    <>
      <h1>This is a Counter value:{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </>
  )
}

export default Counter
