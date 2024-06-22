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
      let res = await fetch('http://localhost:3000/user-cart?username='+currUser.username)
      let products = await res.json()
      setCartProds(products)
    } catch (err) {
      console.log(err)
    }
  }

  async function removeFromCart(id) {
    try {
      const queryURL = `http://localhost:3000/user-cart/${id}`;
      let res = await fetch(queryURL, {
        method: "DELETE"
      });
      console.log(res);
      if (res.status === 200) {
        console.log("product removed from cart");
        getCart();
      }
      
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
            {cartProds.length === 0 && <><h5 className='text-center  text-warning border-2 border-warning border p-3 rounded-4'>No products in cart</h5></>}
              {cartProds.map((product) => {
                return (
                  product.title &&
                  <Product prod={product} key={product.id} logText={logText[0]} mainLog={removeFromCart} />
                )
              })}
          </div>
      </div>
    </>
  )
}

export default Cart