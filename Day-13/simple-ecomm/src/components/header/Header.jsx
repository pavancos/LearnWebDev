import { Link } from 'react-router-dom';
import { useState } from 'react';
//importing icons
import { FaHome } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark " style={{backgroundColor: "var(--dark-cyan)"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Simple Ecom</Link>
        <button className="navbar-toggler" type="button" onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link " to="/"> <FaHome style={{marginRight:'2px'}}/>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/register"><AiFillEdit></AiFillEdit> Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/login"> <FaSignInAlt></FaSignInAlt> Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/aboutus"> <FaInfoCircle></FaInfoCircle> About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;