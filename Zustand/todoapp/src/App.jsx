import { useState } from 'react';
import './App.css';
import { useTodoStore } from './store/store';
import TodoItem from './component/TodoItem';

function App() {
  const [task, setTask] = useState('');
  const { todos, addToDo, toggleToDo, deleteToDo } = useTodoStore();

  const handleAddTodo = () => {
    if (task.trim()) {
      addToDo(task);
      setTask('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add Todo" />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
        ))}
      </div>
    </div>
  );
}

export default App;
