import React from 'react'
import { useState, useContext,useEffect } from 'react';
import Product from '../product/Product'
import './Products.css'
import { get } from 'react-hook-form';
const Products = () => {
  let [products, setProducts] = useState([{}])
  
  async function getProducts() {
    try {
      // let res = await fetch('https://usersapi-msfc.onrender.com/products')
      let res = await fetch('http://localhost:4000/products-api/products')
      let products = await res.json()
      setProducts(products.products)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  })


  return (
    <>
      <div className="container pt-4 bg-secondary rounded rounded-2">
        <h3 className='text-center text-black'>Products</h3>
          <div className="d-flex flex-wrap justify-content-evenly pb-3 pt-2 ">
              {products.map((product,index) => {
                return (
                  <Product key={index} prod={product} />
                )
              })}
          </div>
      </div>
    </>
  )
}

export default Products