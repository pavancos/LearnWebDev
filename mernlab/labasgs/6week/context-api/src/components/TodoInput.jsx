import React, { useContext, useState } from "react";
import { TodoContext } from '../context/ToDoContext'
const TodoInput = () => {
    const [task, setTask] = useState("");
    const { addTodo } = useContext(TodoContext);
    const handleAdd = () => {
        if (task.trim()) {
            addTodo(task);
            setTask("");
        }
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};
export default TodoInput;