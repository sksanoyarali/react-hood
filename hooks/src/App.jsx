import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)
  function increaseNumber() {
    count++
    setCount(count)
    console.log(count)
  }
  function decreaseNumber() {
    count--
    setCount(count)
    console.log(count)
  }
  return (
    <>
      <p>Counter:{count}</p>
      <button onClick={increaseNumber}>Increment</button>
      <button onClick={decreaseNumber}>Decrement</button>
    </>
  )
}
export default App
