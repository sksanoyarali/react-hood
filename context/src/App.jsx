import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { createContext, useState } from 'react'

export const CounterContext = createContext()
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <CounterContext value={{ count, setCount }}>
        <Header />
        <Body />
        <Footer />
      </CounterContext>
    </>
  )
}

export default App
