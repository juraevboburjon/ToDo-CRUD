import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  //   const [todos, setTodos] = useState([]);
  const { id } = useParams();

  const [values, setTitle] = useState({
    id: "",
    title: "",
    completed: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/todos/${id}`)
      .then((res) => setTitle(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/todos/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className=" w-50 rounded shadow px-5 pb-5 bg-white">
        <h1 className="mt-4">Update</h1>

        <form
          onSubmit={handleUpdate}
          className="form d-flex flex-wrap align-items-center justify-content-between"
        >
          <input
            className="w-75 p-1"
            type="text"
            placeholder="Title"
            value={values.title}
            onChange={(e) => setTitle({ ...values, title: e.target.value })}
          />
          <div className="btns">
            <button className="btn btn-warning ms-2">Update</button>
            <Link to={"/"}>
              <button className="btn btn-primary ms-2">Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
