import { useEffect } from 'react'
import { useState } from 'react'

function Timer() {
  useEffect(() => {
    console.log('✅ Timer Mounted')

    const id = setInterval(() => {
      console.log('⏱ Tick')
    }, 1000)

    return () => {
      console.log('❌ Timer Unmounted')
      clearInterval(id)
    }
  }, [])

  return <h2>Timer is running...</h2>
}
function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Unmount Timer' : 'Mount Timer'}
      </button>

      {show && <Timer />}
    </div>
  )
}

export default App
