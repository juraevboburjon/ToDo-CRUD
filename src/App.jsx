import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />,
        <Route path="/create" element={<Create />} />,
        <Route path="/read/:id" element={<Read />} />,
        <Route path="/update/:id" element={<Update />} />
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
