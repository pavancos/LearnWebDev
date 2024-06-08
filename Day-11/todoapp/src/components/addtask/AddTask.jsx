import React from 'react'

const AddTask = () => {
  return (
    <div className="text-center w-25">
        <h2>Add Task</h2>
        <form>
            <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input type="text" className="form-control" id="taskName" placeholder="Enter Task Name" />
            </div>
            <div className="form-group">
            <label htmlFor="taskDesc">Task Description</label>
            <textarea className="form-control" id="taskDesc" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    </div>
  )
}

export default AddTask