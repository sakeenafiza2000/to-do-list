import { ListItem } from "./ListItem.js";

import "./TodoList.css";

export const TodoList = ({ todos, completeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, idx) => {
        return (
          <ListItem
            text={todo}
            key={idx}
            completeTodo={() => completeTodo(idx)}
          />
        );
      })}
    </div>
  );
};
