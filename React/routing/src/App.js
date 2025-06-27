import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cart
        </NavLink>
      </div>
      <h1>Learning Routing</h1>

      <Outlet />

      {/* /cart=<card></card>
      /about=<about></about> */}
    </div>
  );
}

export default App;
