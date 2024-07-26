import { userLoginContext } from './userLoginContext';
import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react'
import { set } from 'react-hook-form';

const UserLoginStore = ({children}) => {
    let [currUser, setCurrUser] = useState([{}]);
    let [err, setErr] = useState('');
    let [loginStatus, setLoginStatus] = useState(false)
    async function loginUser(userDet) {
        try {
            // on render Json API
            // let res = await fetch(`https://usersapi-msfc.onrender.com/users?username=${userDet.username}&password=${userDet.password}`)
            // let res = await fetch(`http://localhost:3000/users?username=${userDet.username}&password=${userDet.password}`)
            let res = await fetch(`http://localhost:4000/user-api/users/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(userDet)

            })
            let result = await res.json();
            console.log("User List ",result);
            if(result.message === "Login Success"){
                setCurrUser(result.user)
                setLoginStatus(true)
                setErr('')
            }else{
                setErr(result.message)
                setCurrUser({});
                setLoginStatus(false);
            }
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
        <userLoginContext.Provider value={{ currUser,setCurrUser, loginUser,loginStatus,logoutUser,err }}>
            {children}
        </userLoginContext.Provider>
    )
}

export default UserLoginStore