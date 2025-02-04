import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <header>
      <nav className='Navs'>
        <figure className='logohold'>
          <img className='logo' src="./teamsLogo.png" alt="Profile" />
        </figure>
        <ul className='NavLinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Author</a></li>
          <li><a href="#">About this Project</a></li>
        </ul>
      </nav>


      <nav className='Socials'>
        <ul className='socialLinks'>
          <li><a href="#"><img src="./githublogo.png" alt="" className="socDp" /></a></li>
          <li><a href="#"><img src="./medium.png" alt="" className="socDp" /></a></li>
          <li><a href="#"><img src="./instagram.png" alt="" className="socDp" /></a></li>
          <li><a href="#"><img src="./linkedin.png" alt="" className="socDp" /></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
