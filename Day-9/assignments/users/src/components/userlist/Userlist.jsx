import React from 'react'
import './Userlist.css'
const Userlist = (props) => {
  return (
    <section className='card'>
      <figure className='picHold'>
        <img className='UserPic' src={props.user.dp} alt="Profile" />

          <img src="./look.jpg" alt="" className="autIc" />

      </figure>
      <div className="info">
        <h2>{props.user.title}</h2>
        <p>{props.user.desc}</p>
        <div className='meta'>
          <p><img src="./author.png" alt="" className="icon" />{props.user.auth}</p>
          <p><img src="./calendar.png" alt="" className="icon" />{props.user.date}</p>
        </div>
      </div>

    </section>
  )
}

export default Userlist
