import { useState } from "react";
import "./ListItem.css";
import { TodoList } from "./TodoList";

export const ListItem = ({ text, completeTodo }) => {
  return (
    <div className="list-item">
      <p>{text}</p>
      <button className="checkbox" onClick={completeTodo}></button>
    </div>
  );
};
