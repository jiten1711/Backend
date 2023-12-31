import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then(res => setJokes(res.data))
      .catch(err => console.log(err))
  })
  return (
    <div>
      <h1>Hello All</h1>
      <p>Jokes Length = {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={index}>
            <h3>{joke.id}</h3>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
