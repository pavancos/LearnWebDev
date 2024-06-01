import { useState } from 'react'
import './App.css'
import Test1 from './components/test1/Test1';
import Test2 from './components/test2/Test2';
function App() {
  let pers1 = {
    name: "Pavan",
    age: 19,
    id: 1,
    imag: 'https://picsum.photos/id/77/367/267'

  }
  let pers2 = {
    name: "Vignesh",
    age: 19,
    id: 2,
    imag: 'https://picsum.photos/id/36/367/267'
  }
  return (
    <>
      <div className='app'>
        <Test1 x={pers1} />
        <Test1 x={pers2} />

      </div>
      <Test2>

      </Test2>
    </>

  )
}
export default App
