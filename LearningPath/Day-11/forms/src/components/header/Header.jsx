import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='text-light '>
      <ul className='nav justify-content-end bg-secondary fs-4'>
        <li className='nav-item'>
            <Link to="" className='nav-link text-white'>Home</Link>
        </li>
        <li className='nav-item'>
            <Link to="login" className='nav-link text-white'>Login</Link>
        </li>
        <li className='nav-item'>
            <Link to="signup" className='nav-link text-white'>Sign up</Link>
        </li>
        <li className='nav-item'>
            <Link to="users" className='nav-link text-white'>Users</Link>
        </li>
        <li className='nav-item'>
            <Link to="parent" className='nav-link text-white'>Parent</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
