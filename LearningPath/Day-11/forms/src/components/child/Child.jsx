import React from 'react'
import {useState} from 'react'
const Child = (props) => {
    let [sample,setSample] = useState(100)
  return (
    <div className='bg-warning max-auto p-4 text-dark'>
      <h2>Child</h2>
      <h3>Counter in Child: {props.count.counter}</h3>

      <button className="btn btn-primary p-3" onClick={()=>{
        props.count.setCounter(props.count.counter+1)
      }} >Add</button>
      <h3>
        {sample}
      </h3>
        <button className="btn btn-success p-3" onClick={()=>{
            setSample(sample+1)
            props.passToParent(sample)
        }} >Send Data to Parent</button>
    </div>
  )
}

export default Child
