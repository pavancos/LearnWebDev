import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { userLoginContext } from '../../contexts/userLoginContext'
import Product from '../product/Product'

import './Cart.css'
const Cart = () => {
  let [cartProds, setCartProds] = useState([{}])
  let {currUser} = useContext(userLoginContext)

  console.log(currUser.username)
  async function getCart() {
    try {
      let res = await fetch('http://localhost:3000/user-cart?username='+currUser.username)
      let products = await res.json()
      setCartProds(products)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getCart()
  },[])


  return (
    <>
      <div className="container pt-4 bg-dark-subtle mt-4 rounded rounded-2">
        <h3 className='text-center text-black'>Cart</h3>
          <div className="d-flex flex-wrap justify-content-evenly pb-3 pt-2 ">
              {cartProds.map((product) => {
                return (
                  product.title &&
                  <Product prod={product} />
                )
              })}
          </div>
      </div>
    </>
  )
}

export default Cart