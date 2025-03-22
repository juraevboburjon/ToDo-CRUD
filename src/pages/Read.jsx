import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [todos, setTodos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/todos/${id}`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 rounded shadow px-5 pb-5 bg-white">
        <h1 className="mt-4">Read</h1>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h5>{todos.title}</h5>
          <div className="btns">
            <Link to={`/update/${todos.id}`}>
              <button className="btn btn-success me-3">Update</button>
            </Link>
            <Link to={"/"}>
              <button className="btn btn-primary me-3">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
