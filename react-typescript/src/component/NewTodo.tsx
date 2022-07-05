import React, { useState, useContext} from "react";
import classes from './NewTodo.module.css';
import {TodosContext} from '../store/todo-context'

const NewTodo: React.FC= () => {

  const todoCtx = useContext(TodosContext)

  const [todoText, setTodoText] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (todoText.trim().length === 0) {
      return;
    }
    console.log(todoText);
    
    todoCtx.addTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>Todo text</label>
      <input
        type="text"
        name="text"
        id="text"
        onChange={onChangeHandler}
        value={todoText}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
