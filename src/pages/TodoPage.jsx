import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TodoPage() {
  // Load todos from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Store the todo currently being edited
  const [editingTodo, setEditingTodo] = useState(null);

  // Save todos whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // CREATE
  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task: task,
      status: "Pending",
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // DELETE
  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  // SELECT TODO FOR EDIT
  const editTodo = (todo) => {
    setEditingTodo(todo);
  };

  // UPDATE
  const updateTodo = (updatedTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editingTodo.id
          ? {
              ...todo,
              task: updatedTask,
            }
          : todo
      )
    );

    setEditingTodo(null);
  };

  // UPDATE STATUS
  const updateStatus = (id, newStatus) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: newStatus,
            }
          : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>Todo Task List</h1>

      <TodoForm
        addTodo={addTodo}
        editingTodo={editingTodo}
        updateTodo={updateTodo}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        updateStatus={updateStatus}
      />
    </div>
  );
}

export default TodoPage;