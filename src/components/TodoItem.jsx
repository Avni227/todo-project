function TodoItem({
  todo,
  deleteTodo,
  editTodo,
  updateStatus,
}) {
  return (
    <tr>
      <td>{todo.task}</td>

      <td>
        <select
          value={todo.status || "Pending"}
          onChange={(e) =>
            updateStatus(todo.id, e.target.value)
          }
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </td>

      <td className="action-buttons">
        <button
          type="button"
          onClick={() => editTodo(todo)}
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;