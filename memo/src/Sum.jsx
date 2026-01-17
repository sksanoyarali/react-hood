import React from 'react'

const Sum = React.memo(({ number }) => {
  function calculateSum() {
    let sum = 0
    for (let i = 1; i <= number; i++) {
      sum += i
    }
    return sum
  }
  const total = calculateSum()
  console.log('sum rendered')

  return (
    <div>
      <h1>This is math library</h1>
      <h2>Sum:{total}</h2>
    </div>
  )
})

export default Sum
