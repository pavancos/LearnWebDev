import React, { useEffect, useState } from "react";
import AddTask from "../addtask/AddTask";
import TasksCount from "../taskscount/TasksCount";
const ManageTasks = () => {
    let [tasks, setTasks] = useState([])
    console.log(tasks.taskName)
    return (
        <>
            <h2 className="text-center mb-5">Task Manager</h2>
            <div className="text-center container-fluid flex flex-row d-flex justify-content-evenly flex-wrap">

                <AddTask list={{ tasks, setTasks }} ></AddTask>
                <div className="text-center rounded border-black shadow-sm p-4 text-dark" style={{width:"33%"} }>
                    <h3>List of Tasks</h3>
                    <table className="table table-striped text-dark">
                        <thead>
                            <tr>
                                <th>Task Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{task}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <TasksCount list={{tasks,setTasks}}></TasksCount>

            </div>
        </>

    )
}

export default ManageTasks