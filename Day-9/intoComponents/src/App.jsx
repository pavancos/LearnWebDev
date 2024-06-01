import { useState } from 'react'
import './App.css'
import Test1 from './components/test1/Test1';

function App() {
  let us1="Pavan"
  let us2="Vignesh"

  return (
    <div>
      <h1>App Component</h1>
      <Test1 x={us1}/>
      <Test1 x={us2}/>

    </div>
  )
}
export default App
