import React, { useEffect, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { userLoginContext } from '../../contexts/userLoginContext'
import './Login.css'
const Login = () => {
  let { currUser ,loginUser,loginStatus } = useContext(userLoginContext)
  let navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  async function onSubmit(data) {
    loginUser(data)
    console.log(loginStatus)
  }
  // useEffect(() => {
  // if (loginStatus) {
  //   navigate('/')
  // }},[loginStatus])
  
  return (
    <div className='pt-4' >
      <h3 className=' text-center '>Login</h3>
      <div className="row mx-auto">
        <div className="col-11 col-sm-10 col-md-6 mx-auto">
          <form action="" className='' onSubmit={handleSubmit(onSubmit)}>
            {/* username */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username"
                {...register('username', { required: true })} />
              {errors.username && <span className='text-danger'>Username is required</span>}
            </div>
            {/* password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password"
                {...register('password', { required: true })} />
              {errors.password && <span className='text-danger'>Password is required</span>}
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login