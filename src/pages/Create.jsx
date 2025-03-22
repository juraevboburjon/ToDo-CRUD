import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Create() {
  const todoId = 10;
  const [values, setTitle] = useState({
    id: "",
    title: "",
    completed: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = todoId + 1;
    values.id = id;
    axios
      .post("http://localhost:3000/todos", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className=" w-50 rounded shadow px-5 pb-5 bg-white">
        <h1 className="mt-4">Create</h1>

        <form
          className="form d-flex flex-wrap align-items-center justify-content-between"
          onSubmit={handleSubmit}
        >
          <input
            className="w-75 p-1"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle({ ...values, title: e.target.value })}
          />
          <div className="btns">
            <button className="btn btn-warning ms-2">Create</button>
            <Link to={"/"}>
              <button className="btn btn-primary ms-2">Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
