import { useState } from "react";
import './NewTodoInput.css';

export default function NewTodoInput({ addTodoMethod }) {
  const [title, setTitle] = useState('');

  function handleChange(event) {
    setTitle(event.target.value);
  }
  
  return (

      <div className="input_box">
        <input placeholder="Enter New Task..." onChange={handleChange} required></input>
        <button onClick={(title.length > 0) ? () => addTodoMethod(title) : () => {}}>Add</button>
      </div>

  )
}