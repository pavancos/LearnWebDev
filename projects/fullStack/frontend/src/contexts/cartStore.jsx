import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { cartContext } from './cartContext';
function cartStore({children}) {
    let [cartProds, setCartProds] = useState([]);
    
    async function updatecart(){
        try {
            let res = await fetch(`http://localhost:4000/user-api/users/${currUser.username}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${sessionStorage.getItem('token')}`
                }
            })
            let user = await res.json()
            if(!user.payload.cart){
                setCartProds([])
                return
            }
            console.log(user);
            setCartProds(user.payload.cart)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <cartContext.Provider value={{cartProds, updatecart}}>
            {children}
        </cartContext.Provider>
    )
}
export default cartStore;