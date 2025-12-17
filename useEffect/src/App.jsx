import React, { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  const [inputCount, setInputCount] = useState(30)
  useEffect(() => {
    async function fetchGithubUser() {
      const response = await fetch(
        `https://api.github.com/users?per_page=${inputCount}`
      )

      const data = await response.json()
      console.log(data)
      setUsers(data)
      console.log('rendered')
    }
    fetchGithubUser()
  }, [inputCount])
  return (
    <>
      <h1>Github User</h1>
      <input
        type="number"
        value={inputCount}
        onChange={(e) => setInputCount(e.target.value)}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {users.map((user) => (
          <img
            key={user.id}
            src={user.avatar_url}
            height={'100px'}
            width={'100px'}
          />
        ))}
      </div>
    </>
  )
}

export default App
