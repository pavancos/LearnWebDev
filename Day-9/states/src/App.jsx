import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  }
  const dec = () => {
    setCount(count - 1);
  }
  const res = () => {
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>INCREMENT</button>
      <button onClick={dec}>DECREMENT</button>
      <button onClick={res}>RESET</button>
      
    </div>
  )
}
export default App
