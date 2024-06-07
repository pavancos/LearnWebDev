import React from 'react'
import {useForm} from 'react-hook-form'
const Signup = () => {
  let {register, handleSubmit,formState:{errors}} = useForm()

  function handleFormSubmit(data){
    console.log(data)
  }

  return (
    <div className=' bg-warning w-50 mx-auto mt-5 p-4 rounded'>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label htmlFor="username" className='form-label'>Username</label>
            <input type="text" {...register('username')} className='form-control' id="username" />
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
