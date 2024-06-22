import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { userLoginContext } from '../../contexts/userLoginContext';
//importing icons
import { FaHome } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import UserProfile from '../userprofile/UserProfile'
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let { currUser, loginUser, loginStatus, logoutUser } = useContext(userLoginContext)
  const logoutCurr = () => {
    logoutUser()
    navigate('/login')
  }
  useEffect(() => {
    console.log(currUser)
  }, [currUser])

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark " style={{ backgroundColor: "var(--dark-cyan)" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Simple Ecom</Link>
        <button className="navbar-toggler" type="button" onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link " to="/"> <FaHome style={{ marginRight: '2px' }} />Home</Link>
            </li>

            {
              loginStatus ?
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="/userprofile"> <IoPersonSharp style={{ marginRight: '2px' }} />Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/cart"> <FaShoppingCart style={{ marginRight: '2px' }} />Cart</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={logoutCurr} > <IoLogOut style={{ marginRight: '2px' }} />Logout</Link>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="/register"><AiFillEdit></AiFillEdit> Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/login"> <FaSignInAlt></FaSignInAlt> Login</Link>
                  </li>
                </>
            }
            <li className="nav-item">
              <Link className="nav-link " to="/aboutus"> <FaInfoCircle></FaInfoCircle> About Us</Link>
            </li>
            {
              loginStatus &&
              <li className="nav-item text-center ">
                <div className='d-flex flex-row align-content-center justify-content-center text-center flex-wrap'>
                  <div style={{ width: '36px' }}>
                    <img className='rounded rounded-circle w-100' src={currUser.profilepicture} alt="" />
                  </div>

                  <p className='text-light m-0'>{currUser.username}</p>
                </div>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;