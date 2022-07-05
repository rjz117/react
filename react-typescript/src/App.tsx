import Todos from './component/Todos';
import NewTodo from './component/NewTodo';
import TodosProvider from './store/todo-context';

function App() {
  return (
    <TodosProvider>
      <NewTodo />
      <Todos />
    </TodosProvider>
  );
}

export default App;
