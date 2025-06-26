import About from "./About";
import React from "react";
import "./App.css";
// import A, { Home } from "./Home";
import Help from "./Help";
import GrandParent from "./GrandParent";

// const element = React.createElement(
//   "h1",
//   { className: "hello" },
//   "From JSX Directly"
// );
function App() {
  let name = "CodehubNexus";
  let information = "I have 2 acre of land for you";
  return (
    <div className="App">
      <h1>Learning React</h1>
      <About n={name}></About>
      <Help name={name} as="Hello world"></Help>
      {/* {element}
      <Home></Home> */}
      {/* <A></A> */}
      <GrandParent info={information}></GrandParent>
    </div>
  );
}

export default App;
