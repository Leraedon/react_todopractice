import './App.css';
import NewTodoInput from './components/NewTodoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    const newTodo = {
      id: count,
      title: title,
      checked: false
    }
    setCount(count + 1);
    setTodos(todos.concat(newTodo));
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  } 

  return (
    <div className="App">
      <h1><span className="title1">L</span><span className="title2">r</span><span className="title1">D</span><span className="title2">o</span><span className="title1">N</span><span className="title3">TO</span><span className="title4">DO</span></h1>
      <NewTodoInput addTodoMethod={addTodo}/>
      {
        todos.length > 0 ?
        <TodoList todos={todos} onRemove={removeTodo} /> :
        <p className="isEmpty">TodoList is Empty</p>
      }
    </div>
  );
}

export default App;
