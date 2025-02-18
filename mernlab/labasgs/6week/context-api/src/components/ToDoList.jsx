import React, { useContext } from "react";
import { TodoContext } from '../context/ToDoContext'
const TodoList = () => {
    const { todos, deleteTodo } = useContext(TodoContext);

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.task}
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
export default TodoList;