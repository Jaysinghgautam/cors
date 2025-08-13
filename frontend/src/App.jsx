 import React, { useEffect,useState } from 'react'
 import axios from 'axios'
 
 function App() {
  const[jokes,setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    }).catch((error) => {
      console.log(error)
    })
  })

   return (
     <div>
      <h1>chai aur code full stack</h1>
    <p>Jokes: {jokes.length} </p>
    {
      jokes.map((joke,index) => (
        <div className="" key={joke.id}>
          <h3> {joke.title} </h3>
          <h2> {joke.content} </h2>
        </div>
      ))
    }
     </div>
     
   )
 }
 
 export default App