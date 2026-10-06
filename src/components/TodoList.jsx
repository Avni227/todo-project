import TodoItem from "./TodoItem";

function TodoList({
  todos,
  deleteTodo,
  editTodo,
  updateStatus,
}) {
  if (todos.length === 0) {
    return (
      <p className="no-task">
        No tasks available.
      </p>
    );
  }

  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            updateStatus={updateStatus}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;