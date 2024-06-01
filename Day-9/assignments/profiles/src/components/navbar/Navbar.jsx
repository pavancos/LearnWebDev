import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <header>
        <figure className='logohold'>
            <img className='logo' src="./batlogo.png" alt="Profile" />
            <figcaption>Batman</figcaption>
        </figure>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
