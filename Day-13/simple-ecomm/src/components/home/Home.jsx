import React from 'react'
import { useState } from 'react'
import './Home.css'
import Register from '../register/Register'
import Login from '../login/Login'
const Home = () => {
  let [register, setRegister] = useState(false)
  let [login, setLogin] = useState(false)

  return (
    <div className='d-flex flex-column align-content-center flex-wrap' style={{ height: '100vh' }}>
      <div className="row w-100 p-4 h-75" style={{ backgroundColor: "var(--dark-cyan)" }}>
        <div className="col col-sm col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <h1 className='display-2'
          onClick={() => { setRegister(false); setLogin(false) }}
          >
            Simple Ecomm
          </h1>
          <p className="lead">a simple e-commerce website</p>
          <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto molestias quae blanditiis aspernatur quod, officiis alias ipsam vero rerum, repudiandae aut vel modi temporibus natus quasi accusantium distinctio assumenda expedita.</p>
          <div className="btn-group" role="group" >
            <button type="button"  className="btn btn-outline-light rounded-0 px-3 py-2 fw-medium"
            onClick={() => { setRegister(true); setLogin(false) }}
            >Register</button>
            <button type="button" className="btn btn-outline-light rounded-0 px-3 py-2 fw-medium"
            onClick={() => { setLogin(true); setRegister(false)}}
            >Login</button>
          </div>
        </div>
        <div className="col justify-content-center  align-content-center d-none d-sm-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex">
          {
            register &&
            <div className='container rounded rounded-2 bg-dark' >
              <Register />
            </div>
              
          }
          {
            
            login && 
            <div className='container mx-4 my-2 rounded rounded-2 bg-dark '>
              <Login /> 
            </div>
          }
          {
            !register && !login &&
            <div className='container d-flex justify-content-center align-content-center flex-wrap' >
            <img className='image-fluid w-75 ' src="/heroImg.jpg" alt="" />
            </div>
          }


          
        </div>

      </div>

    </div>
  )
}

export default Home