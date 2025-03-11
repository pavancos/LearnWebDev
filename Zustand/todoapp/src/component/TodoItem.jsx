const TodoItem = ({ todo, toggleToDo, deleteToDo }) => {
    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleToDo(todo.id)} />
            <span>{todo.task}</span>
            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
