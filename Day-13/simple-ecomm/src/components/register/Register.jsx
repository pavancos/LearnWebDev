import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div>
      <h3 className=' text-center'>Register</h3>
      <form action="">
        {/* username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" />
        </div>
        {/* email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        {/* mobilenumber */}
        <div className="form-group">
          <label htmlFor="mobilenumber">Mobile Number</label>
          <input type="text" className="form-control" id="mobilenumber" />
        </div>
        {/* profilepicture */}
        <div className="form-group">
          <label htmlFor="profilepicture">Profile Picture</label>
          <input type="file" className="form-control" id="profilepicture" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}

export default Register