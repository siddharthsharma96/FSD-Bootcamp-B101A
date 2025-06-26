import About from "./About";
import React from "react";
import "./App.css";
import A, { Home } from "./Home";
import Help from "./Help";

const element = React.createElement(
  "h1",
  { className: "hello" },
  "From JSX Directly"
);
function App() {
  let name = "CodehubNexus";
  return (
    <div className="App">
      <h1>Learning React</h1>
      <About n={name}></About>
      <Help name={name}></Help>
      {/* {element}
      <Home></Home> */}
      {/* <A></A> */}
    </div>
  );
}

export default App;
