import { useEffect, useState } from "react";
import {
  deleteTodoForUsername,
  retrieveAllTodosForUsername,
} from "./api/TodoApiService";
import { useAuth } from "../seurity/AuthContext";
import { useNavigate } from "react-router-dom";
import { Todo } from "./TodoComponent";

export const ListTodoComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [message, setMessage] = useState("");
  const username = useAuth().username;
  const navigate = useNavigate();

  useEffect(() => {
    refreshTodos();
  }, []);

  const refreshTodos = () => {
    retrieveAllTodosForUsername(username)
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  };

  const deleteTodo = (id: number) => {
    deleteTodoForUsername(username, id)
      .then(() => {
        setMessage(`Deleted todo of ID: ${id}`);
        refreshTodos();
      })
      .catch((error) => console.log(error));
  };

  const updateTodo = (id: number) => {
    navigate(`/todo/${id}`);
  };

  return (
    <div className="container">
      <h1>Things you want to do!</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Is Done?</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{new Date(todo.targetDate).toDateString()}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
