import React from 'react'
import Test2 from '../test2/Test2'
const Test1 = (props) => {
  return (
    <div>
      <h1>Props passes:</h1>
      <h2>{props.x}</h2>
      <Test2/>
    </div>
  )
}

export default Test1
