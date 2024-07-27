import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { userLoginContext } from '../../contexts/userLoginContext';
import { cartContext } from '../../contexts/cartContext';
import './Product.css';
import { set } from 'react-hook-form';


const Product = ({ prod, logText,mainLog }) => {
  let { currUser} = useContext(userLoginContext);
  let [currProd, setCurrProd] = useState({});
  // let { updatecart } = useContext(cartContext);
  useEffect(() => {
    setCurrProd(prod);
  }, [prod])
  async function addToCart(currProd) {
    try {
      console.log("Adding user:", currUser.username)
      // let res = await fetch('https://usersapi-msfc.onrender.com/user-cart', 
      let res = await fetch(`http://localhost:4000/user-api/add/${currUser.username}`,
      { 
        method: "PUT",
        headers: { 
          "Content-type": "application/json",
          'Authorization':`Bearer ${sessionStorage.getItem('token')}`
         },
        body: JSON.stringify(currProd)
      })
      console.log(res)
      if (res.status === 200) {
        console.log("product added to cart");
        updatecart();
      }
    } catch (err) {
      console.log(err);
    }
  }

  

  return (
    
    <div className="card bg-black border-secondary m-2 p-2 text-light" style={{ maxWidth: '250px' }}>
      <div className="card-header">
        <h5 className="card-title">{prod.title}</h5>
      </div>
      <div className="card-body">
        <img className="card-img-top"
          src={prod.thumbnail}
          alt={prod.title} />
        <p className=" fw-light">
          {prod.price}
        </p>
        <p className=''>
          {prod.description}
        </p>

      </div>
      <div className="card-footer">

        
        {
          (logText)?
            <button type="button" className="btn btn-outline-danger w-100"
              onClick={() => { mainLog(currProd.id) }}
            >
              {logText}
            </button>
          
        :
        <button type="button" className="btn btn-outline-primary w-100"
          onClick={() => { addToCart(currProd) }}
        >
          Add to Cart
        </button>
      } 

        

      </div>
    </div>
  );
}

export default Product;