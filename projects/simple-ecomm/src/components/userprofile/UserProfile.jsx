import React from 'react'
import { useContext, useState,useEffect } from 'react'
import { userLoginContext } from '../../contexts/userLoginContext'
import './UserProfile.css'
const UserProfile = () => {
  let { currUser, loginUser, loginStatus, logoutUser, err } = useContext(userLoginContext)
  
  return (
    <>
    

    </>
  )
}

export default UserProfile