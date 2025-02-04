import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

const RegForm = () => {
    let { register, handleSubmit, formState: { errors } } = useForm()
    let [formData, setFormData] = useState({})
    return (
        <div className='card w-75 p-5'>
            <h4>Registration Form</h4>
            <form className='form mt-2' onSubmit={
                handleSubmit((data) => {
                    setFormData(data)
                    console.log(data)
                })
            }>
                <div className="row">
                    <div className="col">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" {...register('firstName', { required: true,minLength:4,maxLength:6 })} />
                        {errors.firstName?.type==="required" && <div className="form-text text-danger">First Name is required</div>}
                        {errors.firstName?.type==="minLength" && <div className="form-text text-danger">First Name should be atleast 4 characters</div>}
                        {errors.firstName?.type==="maxLength" && <div className="form-text text-danger">First Name should be atmost 6 characters</div>}
                    </div>
                    <div className="col">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" {...register('lastName',{ required: true,minLength:4,maxLength:6 })} />
                        {errors.lastName && <div className="form-text text-danger">Last Name is required</div>}
                        {errors.lastName?.type==="minLength" && <div className="form-text text-danger">Last Name should be atleast 4 characters</div>}
                        {errors.lastName?.type==="maxLength" && <div className="form-text text-danger">Last Name should be atmost 6 characters</div>}
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                        <label htmlFor="birthDay" className="form-label">Birthday</label>
                        <input type="date" className="form-control" id="birthDay" {...register('birthDay', { required: true })} />
                        {errors.birthDay && <div className="form-text text-danger">Birthday is required</div>}
                    </div>
                    <div className="col">
                        <label className="form-label">Gender</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="genderMale" {...register('gender', { required: true })} />
                            <label className="form-check-label" htmlFor="genderMale">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="genderFemale" {...register('gender', { required: true })} />
                            <label className="form-check-label" htmlFor="genderFemale">
                                Female
                            </label>
                        </div>
                        {errors.gender && <div className="text-danger">Gender is Required</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" {...register('email', { required: true })} />
                        {errors.email && <div className="form-text text-danger">Email is required</div>}
                    </div>
                    <div className="col">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="phone" className="form-control" id="phone" {...register('phone', { required: true, minLength:10,maxLength:10 })} />
                        {errors.phone && <div className="form-text text-danger">Phone Number is required</div>}
                        {errors.phone?.type==="minLength" && <div className="form-text text-danger">Phone Number should be 10 digits</div>}
                        {errors.phone?.type==="maxLength" && <div className="form-text text-danger">Phone Number should be 10 digits</div>}
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="subject" className="form-label">Subject: </label>
                    <select class="form-select"  id='subject' name='subject'>
                        <option value='Data Structures' >DSA</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Machine Learning">Machine Learning</option>
                    </select>


                </div>
                <button className="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    )
}

export default RegForm