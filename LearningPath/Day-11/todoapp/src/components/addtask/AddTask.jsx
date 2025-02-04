import React from 'react'
import { useForm } from 'react-hook-form'
const AddTask = (props) => {
    let { register, handleSubmit, formState: { errors } } = useForm()
    function handleFormSubmit(data) {
        props.list.setTasks([...props.list.tasks, data.taskName])
    }

  return (
    <div className="text-center w-25 rounded border-black shadow-sm p-4 ">
        <h2>Add Task</h2>
        <form className='form ' onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input type="text" {...register('taskName')} className="form-control" id="taskName" placeholder="Enter Task Name" />
            </div>
            <button type="submit" className="btn btn-primary mt-4">Add Task</button>
        </form>
    </div>
  )
}

export default AddTask