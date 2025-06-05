import { useState } from "react";
import "./App.css"; // import CSS

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = task;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    setTask("");
  };

  const handleEdit = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    if (editIndex === index) {
      setTask("");
      setEditIndex(null);
    }
  };

  return (
    <div className="app-container">
      <h2>Todo List</h2>
      <div className="input-section">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddOrEdit}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div className="btn-group">
              <button onClick={() => handleEdit(index)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
