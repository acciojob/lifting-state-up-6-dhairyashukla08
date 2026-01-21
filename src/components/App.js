import React, { useState } from "react";
import './../styles/App.css';
import TodoList from './TodoList';

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Master State Management", completed: false }
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div id="main">
      <h1>Todo List Manager</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default App;
