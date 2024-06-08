import React, { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import RegUsers from '../regusers/RegUsers'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Signup = () => {
  let { register, handleSubmit, formState: { errors } } = useForm()
  let [regUsers, setRegUsers] = useState([])
  let navigate = useNavigate()
  let location = useLocation()

  function handleFormSubmit(data) {
    navigate('/regusers', { state: data })
  }

  // function handleFormSubmit(data) {
  //   setRegUsers([...regUsers, data])
  //   navigate('/regusers', { state: regUsers })
  // }
  // function handleFormSubmit(data) {
  //   setRegUsers(prevRegUsers => {
  //     const updatedRegUsers = [...prevRegUsers, data];
  //     navigate('/regusers', { state: updatedRegUsers });
  //     return updatedRegUsers;
  //   });
  // }

  return (
    <div className=' bg-warning w-50 mx-auto mt-5 p-4 rounded'>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className='form-label'>Username</label>
          <input type="text" {...register('username',{required:true,minLength:4,maxLength:8})} className='form-control' id="username" />
          {errors.username && <span className='text-danger'>Username must be 4 to 8 characters long</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className='form-label'>Password</label>
          <input type="password" {...register('password')} className='form-control' id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className='form-label'>Email</label>
          <input type="email" {...register('email')} className='form-control' id="email" />
        </div>
        <button type="submit" className='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}

export default Signup