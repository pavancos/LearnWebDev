import React from 'react'
import { useState } from 'react'
const Child = (props) => {
  let [sample, setSample] = useState(100)
  return (
    <>
      <div className='bg-dark max-auto p-4 text-dark rounded-4 font-monospace mx-auto'>

        <div className='d-flex flex-row align-content-center justify-content-center'>
          <button className="btn btn-primary p-3 mx-3 fw-bold" onClick={() => {
            props.count.setCounter(props.count.counter + 1)
          }} >Increment</button>
          <button className="btn btn-success p-3 mx-3 fw-bold" onClick={() => {
            props.count.setCounter(props.count.counter - 1)
          }} >Decrement</button>
        </div>



      </div>
      <h2 className='font-monospace mt-3'>Child</h2>
    </>

  )
}

export default Child
