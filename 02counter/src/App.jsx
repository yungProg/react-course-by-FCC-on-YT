import { useState } from 'react'

import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter);
  }

  function reduceValue() {
    setCounter(counter - 1)
  }

  // If there is the need to know the previous state, use callback function in setState method. 
  // Parameter passed to the function has access to the previous state

  function increaseByFour() {
    setCounter((prevCounter) => prevCounter + 4)
  }

  return (
    <>
      <h1>Gideon's counter web app with react</h1>
      <p>Count: {counter}</p>
      <button onClick={addValue}>Increase</button> {" "}
      <button onClick={reduceValue}>Decrease</button> {" "}
      <button onClick={increaseByFour}>Increase By Four</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
