import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { userLoginContext } from '../../contexts/userLoginContext'
import Product from '../product/Product'

import './Cart.css'
const Cart = () => {
  let [cartProds, setCartProds] = useState([{}])
  let {currUser} = useContext(userLoginContext)
  let logText=['Remove from Cart']

  async function getCart() {
    try {
      // let res = await fetch('https://usersapi-msfc.onrender.com/user-cart?username='+currUser.username)
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
      setCartProds(user.payload.cart)
      // setCartProds(products)
    } catch (err) {
      console.log(err)
    }
  }

  async function removeFromCart(id) {
    try {
      const queryURL = `http://localhost:4000/user-api/remove/${currUser.username}`;
      let res = await fetch(queryURL, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify({ product: { id } })
      });
      let respo = await res.json();
      // Re-render the cart
      getCart();
      
    } catch (err) {
      console.log(err);
    }
  }




  useEffect(() => {
    getCart()
  },[])


  return (
    <>
      <div className="container pt-4 bg-secondary rounded rounded-2">
        <h3 className='text-center text-black'>Cart</h3>
          <div className="d-flex flex-wrap justify-content-evenly pb-3 pt-2 ">
            {(!cartProds) && <><h5 className='text-center  text-warning border-2 border-warning border p-3 rounded-4'>No products in cart</h5></>}
              {cartProds.map((product,index) => {
                return (
                  product.title &&
                  <Product prod={product} key={index} logText={logText[0]} mainLog={removeFromCart} />
                )
              })}
          </div>
      </div>
    </>
  )
}

export default Cart