import React from 'react'

const Food = ({ foods }) => {
  return (
    <div>
      <ul>
        {foods.map((food) => (
          <li key={}>{food}</li>
        ))}
      </ul>
    </div>
  )
}

export default Food
