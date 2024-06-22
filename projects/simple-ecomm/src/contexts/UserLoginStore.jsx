import { userLoginContext } from './userLoginContext';
import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react'
import { set } from 'react-hook-form';

const UserLoginStore = ({children}) => {
    let [currUser, setCurrUser] = useState([{}])
    let [err, setErr] = useState('');
    let [loginStatus, setLoginStatus] = useState(false)
    async function loginUser(userDet) {
        try {
            // let res = await fetch(`https://usersapi-msfc.onrender.com/users?username=${userDet.username}&password=${userDet.password}`)
            let res = await fetch(`http://localhost:3000/users?username=${userDet.username}&password=${userDet.password}`)
            
            // let res = await fetch(`https://j46m624g-3000.inc1.devtunnels.ms/users?password=${userDet.password}&username=${userDet.username}`)
            let curr = await res.json()
            if(curr.length==0){
                console.log('User not found')
                setErr("Invalid Username/Password");
                setCurrUser(null)
                setLoginStatus(false)
            }
            else if(curr[0].password!=userDet.password){
                console.log("Password incorrect")
                setErr("Password incorrect")
                console.log(curr[0].password+" "+userDet.password)
                setCurrUser(null)
                setLoginStatus(false)
            }
            else{
                setCurrUser(curr[0])
                setLoginStatus(true)
                console.log(curr[0])
                console.log(loginStatus)
            }
            
            // if (curr.length == 0 || curr[0].password != userDet.password) {
            //     console.log('User not found')
            //     console.log(curr[0].password+" "+userDet.password)
            //     setCurrUser(null)
            //     setLoginStatus(false)
            // }
            // else {
            //     setCurrUser(curr[0])
            //     setLoginStatus(true)
            //     console.log(curr[0])
            //     console.log(loginStatus)            
            // }
        } catch (err) {
            console.log(err)
            setErr(err)
        }
    }

    const logoutUser = () => {
        setCurrUser({})
        setLoginStatus(false)
    }

    return (
        <userLoginContext.Provider value={{ currUser, loginUser,loginStatus,logoutUser,err }}>
            {children}
        </userLoginContext.Provider>
    )
}

export default UserLoginStore