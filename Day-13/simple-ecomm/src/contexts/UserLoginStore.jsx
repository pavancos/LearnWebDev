import { userLoginContext } from './userLoginContext';
import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react'

const UserLoginStore = ({children}) => {
    let [currUser, setCurrUser] = useState({})
    let [loginStatus, setLoginStatus] = useState(false)
    async function loginUser(userDet) {
        try {
            let res = await fetch(`http://localhost:3000/users?username=${userDet.username}&password=${userDet.password}`)
            let listUser = await res.json()
            if (listUser.length == 0) {
                console.log('User not found')
                setCurrUser(null)
                setLoginStatus(false)
            }
            else {
                setCurrUser(listUser)
                setLoginStatus(true)               
            }
        } catch (err) {
            console.log(err)
        }
    }

    const logoutUser = () => {
        setCurrUser({})
        setLoginStatus(false)
    }

    return (
        <userLoginContext.Provider value={{ currUser, loginUser,loginStatus }}>
            {children}
        </userLoginContext.Provider>
    )
}

export default UserLoginStore