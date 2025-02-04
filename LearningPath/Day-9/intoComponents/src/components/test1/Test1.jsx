import React from 'react'
import Test2 from '../test2/Test2'
import './Test1.css'
const Test1 = (props) => {
  return (
    <div className='card'>
      <h1>Name: {props.x.name}</h1>
      <img src={props.x.imag} alt=''></img>
      <h2>Age: {props.x.age}</h2>
      <h2>UID: {props.x.id}</h2>
    </div>
  )
}
export default Test1
