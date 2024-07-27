import React from 'react'
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userLoginContext } from '../../contexts/userLoginContext';
import './Edituser.css'

const Edituser = () => {
    const { register, handleSubmit, formState: { errors },setValue } = useForm();
    let { currUser,setCurrUser } = useContext(userLoginContext)
    let navigate = useNavigate();
    // errors State
    let [error, setError] = useState();

    async function OnProfileUpdate(updatedDetails){
        console.log('updatedDetails: ', updatedDetails);
        // let res = await fetch(`https://usersapi-msfc.onrender.com/users/${currUser.id}`,
        let res = await fetch(`http://localhost:4000/user-api/users/`, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedDetails)
        })
        let result = await res.json();
        console.log('result: ', result);
        if(result.message === "User Updated"){
            setCurrUser(result.updateuser)
            navigate('/profile');
            setError(null)
        }
        else{
            setError("Something went wrong");
        } 
    }

    return (
        <div className='pt-4' >
            <h3 className=' text-center '>Edit details</h3>
            <div className="row mx-auto">
                <div className="col-11 col-sm-10 col-md-6 mx-auto">
                    {error && <p className='alert alert-danger'>{error}</p>}
                    <form action="" className='' onSubmit={handleSubmit(OnProfileUpdate)}>
                        {/* username */}
                        <div className="form-group mb-2">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username"
                                {...register('username')}  value={setValue('username',currUser.username)}/>
                            {errors.username && <span className='text-danger'>Username is required</span>}
                        </div>
                        {/* email */}
                        <div className="form-group mb-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email"
                                {...register('email')} value={setValue('email',currUser.email)} />
                            {errors.email && <span className='text-danger'>Email is required</span>}
                        </div>
                        {/* password */}
                        {/* <div className="form-group mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"
                                {...register('password', { required: true })} />
                            {errors.password && <span className='text-danger'>Password is required</span>}
                        </div> */}
                        {/* mobilenumber */}
                        <div className="form-group mb-2">
                            <label htmlFor="mobilenumber">Mobile Number</label>
                            <input type="text" className="form-control" id="mobilenumber"
                                {...register('mobilenumber')} value={setValue('mobilenumber',currUser.mobilenumber)} />
                            {errors.mobilenumber && <span className='text-danger'> Mobile Number is required</span>}
                        </div>
                        {/* profilepicture */}
                        <div className="form-group mb-2">
                            <label htmlFor="profilepicture">Profile Picture</label>
                            <input type="text" className="form-control" id="profilepicture"
                                {...register('profilepicture')} value={setValue('profilepicture',currUser.profilepicture)} />
                        </div>
                        <button type="submit" className="btn btn-primary bg-gradient mt-1">Save Changes</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Edituser