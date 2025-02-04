import React from 'react'
const UserCount = (props) => {
  return (
    <div className='rounded rounded-pill px-5 py-2 border border-1 border-primary bg-primary-hover mx-auto text-center my-5'>
        {props.Counter.count}
    </div>
  )
}

export default UserCount