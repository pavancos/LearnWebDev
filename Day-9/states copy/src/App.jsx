import { useState } from 'react'
import './App.css'
function App() {
  const [arr, setCount] = useState(['html', 'css', 'js']);
  const add = () => {
    setCount([...arr, 'react']);
  }
  const remove = () => {
    setCount(arr.slice(0, arr.length - 1));
  }
  //add at front
  const addFront = () => {
    setCount(['react', ...arr]);
  }
  //remove from front
  const removeFront = () => {
    setCount(arr.slice(1));
  }
  //add at 2nd position
  const addAtTwo = () => {
    let newArr = [...arr];
    newArr.splice(1, 0, 'react');
    setCount(newArr);
  }

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <button onClick={add}>ADD</button>
      <button onClick={remove}>REMOVE</button>
      <button onClick={addFront}>ADD FRONT</button>
      <button onClick={removeFront}>REMOVE FRONT</button>
      <button onClick={addAtTwo}>ADD AT 2</button>
    </div>
  )
}
export default App
