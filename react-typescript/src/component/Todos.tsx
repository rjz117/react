import TodoItem from "./TodoItem";
import classes from "./NewTodo.module.css";
import { useContext } from 'react';
import {TodosContext} from '../store/todo-context'

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext)
  console.log(todoCtx.items);
  
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((t) => {
        return (
          <TodoItem
            key={t.id}
            todo={t}
            removeTodo={todoCtx.removeTodo.bind(null, t.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
