import "./styles.css";
import { Form } from "./components/Form";
import { useState } from "react";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (todoIndex) => {
    const todosCopy = [...todos];
    todosCopy.splice(todoIndex, 1);
    setTodos(todosCopy);
  };

  return (
    <div className="App">
      <h1> TO DO LIST </h1>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />
    </div>
  );
}
