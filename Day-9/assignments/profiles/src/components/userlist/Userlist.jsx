import React from 'react'
import './Userlist.css'
const Userlist = (props) => {
  return (
    <section className='card'>
        <figure className='picHold'>
            <img className='UserPic' src="./batmanSquare.jpg" alt="Profile" />
        </figure>
        <h2>{props.user.name}</h2>
        <p>Real name: {props.user.realName}</p>
        <p>Power: {props.user.power}</p>
    </section>
  )
}

export default Userlist
