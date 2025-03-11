import { useState } from "react";
import { useTodoStore } from "./store/TodoStore";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [task, setTask] = useState("");
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Todo App</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a task..." />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
