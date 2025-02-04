import React from 'react'

const TasksCount = (props) => {
  return (
    <div className="text-center w-25 rounded border-black shadow-sm p-4">
        <h2>Task Count</h2>
        <div className="alert alert-primary" role="alert">
            <h1>{props.list.tasks.length}</h1>
        </div>
        
    </div>
  )
}

export default TasksCount