import { useEffect, useState } from "react";

function TodoForm({ addTodo, editingTodo, updateTodo }) {
  const [task, setTask] = useState("");

  // Put selected task into input when editing
  useEffect(() => {
    if (editingTodo) {
      setTask(editingTodo.task);
    } else {
      setTask("");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    if (editingTodo) {
      updateTodo(task);
    } else {
      addTodo(task);
    }

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">
        {editingTodo ? "Update" : "Add Task"}
      </button>
    </form>
  );
}

export default TodoForm;