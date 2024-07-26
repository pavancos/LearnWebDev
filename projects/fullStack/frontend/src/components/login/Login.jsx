import React, { useEffect, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { userLoginContext } from '../../contexts/userLoginContext'
import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import './Login.css'
const Login = () => {

  let { currUser, loginUser, loginStatus, err } = useContext(userLoginContext)
  let [showAlert, setShowAlert] = useState(true)
  let [showPass, setShowPass] = useState(false)
  let navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  async function onSubmit(data) {
    loginUser(data)
    console.log(loginStatus)
  }
  useEffect(() => {
  if (loginStatus) {
    navigate('/')
  }},[loginStatus])


  return (
    <div className='pt-4' >
      <h3 className=' text-center '>Login</h3>
      <div className="row mx-auto">
        <div className="col-11 col-sm-10 col-md-6 mx-auto">
          {err && showAlert &&
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <p className='d-inline fw-bold ' >{err}</p > Check the crederntials and try again
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                onClick={() => setShowAlert(false)}
              ></button>
            </div>
          }
          <form action="" className='' onSubmit={handleSubmit(onSubmit)}>
            {/* username */}
            <div className="form-group mb-1">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username"
                {...register('username', { required: true })} />
              {errors.username && <span className='text-danger'>Username is required</span>}
            </div>
            {/* password */}
            <div className="form-group mb-2">
              <label htmlFor="password">Password</label>
              <div className="input-group mb-2">
                <input type={showPass ? "text" : "password"} className="form-control d-inline" id="password"
                  {...register('password', { required: true })} />
                <button className='btn btn-light pb-2' type='button' onClick={() => setShowPass(!showPass)}>
                  {showPass ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>


              {errors.password && <span className='text-danger'>Password is required</span>}
            </div>
            <button type="submit" className="btn btn-primary bg-gradient">Login</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login