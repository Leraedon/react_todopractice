import { useState } from "react";
import './Todo.css';

export default function Todo({id, title, checked, onRemove}) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoTitle, setTodoTitle] = useState(title);
  const [currentChecked, setCurrentChecked] = useState(false);

  function handleChange(event) {
    setTodoTitle(event.target.value)
  }

  return (
      <div className={"todo_box" + (currentChecked ? " checked" : "")}>
        <input type="checkbox" id="todo_checkbox" defaultChecked={checked} onChange={(e) => setCurrentChecked(e.target.checked)} />
        <label for="todo_checkbox" />
        {
          isEditing ? 
          <span><input type="text" className="todo_edit_input" required value={todoTitle} onChange={handleChange}/>
            <span className="buttons">
            <button className="save_button" onClick={() => setIsEditing(false)}>Save</button> 
            <button className="delete_button" onClick={() => onRemove(id)}>Delete</button>
            </span>
          </span> :
          <span><span className="todo_title">{todoTitle}</span>
            <span className="buttons">
            <button className="edit_button" onClick={() => setIsEditing(true)}>Edit</button> 
            <button className="delete_button" onClick={() => onRemove(id)}>Delete</button>
            </span>
          </span> 
        }
      </div>
  );
}