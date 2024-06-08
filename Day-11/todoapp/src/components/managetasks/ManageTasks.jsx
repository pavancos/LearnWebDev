import React,{useEffect,useState} from "react";
import AddTask from "../addtask/AddTask";
const ManageTasks = () => {
  return (
    <div className="text-center container-fluid">
        <h2>Task Manager</h2>
        <AddTask></AddTask>
    </div>
  )
}

export default ManageTasks