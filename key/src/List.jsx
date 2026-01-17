import React, { useState } from 'react'
import Food from './Food'

const List = () => {
  const [foodItem, setFoodItem] = useState(['apple', 'orange', 'banana'])
  function handleChange() {
    setFoodItem(['mango', ...foodItem])
  }
  return (
    <div>
      <button onClick={handleChange}>Increment</button>
      <Food foods={foodItem} />
    </div>
  )
}

export default List
