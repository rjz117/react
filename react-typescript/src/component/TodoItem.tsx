import React from "react";
import Todo from "../model/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo, removeTodo : () => void }> = (props) => {
  return (
    <li
      className={classes.item}
      key={props.todo.id}
      onClick={props.removeTodo}
    >
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
