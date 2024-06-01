import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //variable
  let name = 'pavan'
  //array
  let fruits = ['apple', 'banana', 'mango']
  //objects
  let person = {
    name: 'pavan',
    age: 19,
    pid: 1234
  }
  //array of objects
  let persons = [
    {
      name: 'pavan',
      age: 19,
      pid: 1234
    },
    {
      name: 'kumar',
      age: 20,
      pid: 1235
    },
    {
      name: 'vignesh',
      age: 21,
      pid: 1236
    }
  ]
  return (
    <>
    <div>
      <h2>{name}</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.pid}</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>PID</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.pid}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {name === 'pavan' ? <h1>Hi Pavan</h1> : <h1>Hi Guest</h1>}

      <button onClick={() => alert('Hello')}>Click Me</button>
      <button onClick={() => alert('Hello', name)}>Click Me</button>

    </div>
    </>
  )
}

export default App
