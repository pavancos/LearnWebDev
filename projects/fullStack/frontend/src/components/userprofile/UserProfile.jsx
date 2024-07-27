import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { userLoginContext } from '../../contexts/userLoginContext'
import { cartContext } from '../../contexts/cartContext'
import { IoPersonSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";

import './UserProfile.css'
const UserProfile = () => {
  let { currUser, loginUser, loginStatus, logoutUser, err } = useContext(userLoginContext);
  // let { cartProds,updatecart } = useContext(cartContext);

  return (
    <>
      <div className='container pt-2'>
        <h3 className='text-center'>User Profile</h3>
        <div className="row">
          <div className="col-11 col-sm-10 col-md-6 mx-auto">
            <div className="card text-bg-secondary ">
              <img src={currUser.profilepicture} className="card-img-top object-fit-contain" />
              <div className="card-body ">
                <h5 className="card-title">{currUser.username}</h5>
                <h6 className="card-subtitle mb-1">Email: {currUser.email}</h6>
                <p className="card-text">Mobile Number: {currUser.mobilenumber}</p>
              </div>
              <div className="card-footer d-flex align-content-center justify-content-around pt-4 pb-4">

                <Link className="btn btn-primary " to="/"> <FaHome style={{ marginRight: '2px' }}></FaHome>Home</Link>
                <Link className="btn btn-primary " to="./"> <BsFillBoxSeamFill style={{ marginRight: '2px' }} />Products</Link>


                <Link className="btn btn-primary position-relative " to="cart">
                  <FaShoppingCart style={{ marginRight: '2px' }} >
                  
                  </FaShoppingCart>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {/* {cartProds.length} */}
                    <span className="visually-hidden">Cart Items</span>
                  </span>
                  Cart
                  
                </Link>

              </div>

            </div>
          </div>

        </div>
        <div className='pt-5'>
          <Outlet></Outlet>
        </div>
      </div>


    </>
  )
}

export default UserProfile