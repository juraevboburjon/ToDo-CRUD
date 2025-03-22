import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:3000/todos/${id}`)
        .then((res) => {
          setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="mt-5 d-flex justify-content-between col-6">
        <h1>Todos</h1>
        <Link to="/create">
          <button className="btn btn-warning">Create</button>
        </Link>
      </div>

      <div className="col-6 rounded shadow-lg p-3 bg-white">
        <table className="table">
          <tbody>
            {todos.map((todo, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{todo.title}</td>
                  <td className="text-end">
                    <Link to={`/read/${todo.id}`}>
                      <button className="btn btn-sm btn-success ms-4 me-2">
                        Read
                      </button>
                    </Link>
                    <Link to={`/update/${todo.id}`}>
                      <button className="btn btn-sm btn-primary me-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
