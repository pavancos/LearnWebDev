import React from 'react'
import { set, useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
const Register = () => {

  let navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError]=useState("");
  let [users, setUsers] = useState([{}])
  async function onSubmit(data) {
    try {
      let res = await fetch('http://localhost:4000/user-api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      let result = await res.json();
      setUsers([...users, result]);
  
      if (result.message === "User Created" ) {
        navigate("/login");
      } else if(result.message === "User Already Exists") {
        setError("User Already Exists");
        // setTimeout(() => {
        //   navigate("/login");
        // }, 2000);
      }
      else {
        setError(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


    
    
  

  return (
    <div className='pt-4' >
      <h3 className=' text-center '>Register</h3>
      <div className="row mx-auto">
        <div className="col-11 col-sm-10 col-md-6 mx-auto">
          {error && <p className='alert alert-danger'>{error}</p>}
          <form action="" className='' onSubmit={handleSubmit(onSubmit)}>
            {/* username */}
            <div className="form-group mb-2">
              <label htmlFor="username">Username</label>
              <input autoComplete='off' type="text" className="form-control" id="username"
                {...register('username', { required: true })} />
              {errors.username && <span className='text-danger'>Username is required</span>}
            </div>
            {/* email */}
            <div className="form-group mb-2">
              <label htmlFor="email">Email</label>
              <input autoComplete='off' type="email" className="form-control" id="email"
                {...register('email', { required: true })} />
              {errors.email && <span className='text-danger'>Email is required</span>}
            </div>
            {/* password */}
            <div className="form-group mb-2">
              <label htmlFor="password">Password</label>
              <input autoComplete='off' type="password" className="form-control" id="password"
                {...register('password', { required: true })} />
              {errors.password && <span className='text-danger'>Password is required</span>}
            </div>
            {/* mobilenumber */}
            <div className="form-group mb-2">
              <label htmlFor="mobilenumber">Mobile Number</label>
              <input autoComplete='off' type="text" className="form-control" id="mobilenumber"
                {...register('mobilenumber', { required: true })} />
              {errors.mobilenumber && <span className='text-danger'> Mobile Number is required</span>}
            </div>
            {/* profilepicture */}
            <div className="form-group mb-2">
              <label htmlFor="profilepicture">Profile Picture</label>
              <input autoComplete='off' type="text" className="form-control" id="profilepicture"
                {...register('profilepicture', { required: true })} />
              {errors.profilepicture && <span className='text-danger'>Profile Picture is required</span>}
            </div>
            <button type="submit" className="btn btn-primary bg-gradient mt-1">Register</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Register