import React, { useState } from "react";
import Todo from "../model/Todo";

interface Props {
  children: React.ReactNode;
}

type todoContextValue = {
    items : Todo[];
    addTodo : (txt:string) => void;
    removeTodo : (id:string) => void
}

export const TodosContext = React.createContext<todoContextValue>({
    items : [],
    addTodo : (_txt:string) => {/* */},
    removeTodo : (_id: string) => {/* */}
})

const TodosProvider:React.FC<Props>= ({ children }) => {

    const emptyTodo :Todo[] = [];
    const[todos, setTodos] = useState(emptyTodo);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
      console.log(newTodo);
      
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
    };

    const removeTodoHandler = (id:string) :void => {
      setTodos((prevTodo) => prevTodo.filter((t) => t.id !== id))
    }

    const contextValue:todoContextValue = {
        items: todos,
        addTodo :addTodoHandler,
        removeTodo : removeTodoHandler
    }
    return(
        <TodosContext.Provider value={contextValue}>
            {children}    
        </TodosContext.Provider>
    )
}


export default TodosProvider;

