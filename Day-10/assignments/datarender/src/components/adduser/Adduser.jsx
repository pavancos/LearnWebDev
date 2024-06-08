import React, { useEffect, useState } from 'react'
import Userlist from '../userlist/Userlist'
import { useForm } from 'react-hook-form';
const Adduser = () => {
    const {register, handleSubmit} = useForm();
    let [userList, setUserList] = useState([]);
    const onSubmit = (data) => {
        setUserList([...userList, data]);
    }

    return (
        <div className="w-100 container-fluid bg-dark">
            <h1 className="text-center text-light p-3">User Registration</h1>
            <form className='bg-secondary text-light p-4 w-75 mx-auto rounded mt-3' onSubmit={handleSubmit(onSubmit)}>
                {/* Username */}
                <div className="mt-2">
                    <label htmlFor="username" className="form-lable">Username:</label>
                    <input type="text" {...register('username',{required:true,minLength:4,maxLength:8})} id="username" className="form-control" />
                </div>
                {/* Date of Birth */}
                <div className="mt-3">
                    <label htmlFor="date" className="form-lable">Date of birth:</label>
                    <input type="date" id="dateofb" {...register('dateofb',{required:true})} className="form-control" />
                </div>
                {/* City */}
                <div className="mt-3">
                    <label htmlFor="city" className="form-lable">City:</label>
                    <input type="text" {...register('city',{required:true})} id="city" className="form-control" />
                </div>
                {/* Submit */}
                <div>
                    <button type="submit" className="btn btn-primary mt-3">Register</button>
                </div>
            </form>
            <Userlist userList={userList}></Userlist>

        </div>
    )
}

export default Adduser
