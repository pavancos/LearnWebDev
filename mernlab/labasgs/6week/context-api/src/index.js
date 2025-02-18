import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import TodoContext, {TodoProvider} from "./context/ToDoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/ToDoList";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>To-Do List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));