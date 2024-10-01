import Todo from "./Todo";
import "./TodoList.css";

export default function TodoList({ todos, onRemove }) {
  return (
    <ul className="todo_list_box">
      {todos.map((todo) => (
        <Todo 
        key={todo.id}
        title={todo.title}
        checked={todo.checked}
        onRemove={() => onRemove(todo.id)}
        />
      ))

      }
    </ul>
  )
}