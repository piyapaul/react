import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
//let counter = 15
const addValue = () => {
  if(counter === 20){
    prompt("It is the highest value");
    return;
  }
  counter = counter+1
  setCounter(counter)
  console.log("clicked",counter)
}
const removeValue = () => {
   if(counter === -1)
    return
  counter = counter - 1
  setCounter(counter)
}
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br></br>
      <button onClick={removeValue}>Decrese value{counter}</button>
    </>
  )
}

export default App
