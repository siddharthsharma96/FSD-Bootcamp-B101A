import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function App() {
  // let value = 0;
  // value=variable
  // setValue-=Function To update the value
  let [val, setVal] = useState(0);

  const handleIncrement = () => {
    // value = value + 1;
    setVal(val + 1);
    // console.log("button Clicked of Increment", val);
  };
  const handleDecrement = () => {
    // val = val - 1;
    setVal(val - 1);

    // console.log("button Clicked of Decrement", val);
  };
  return (
    <div className="App">
      <h1>Our First Small Project</h1>
      <Counter
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
}

export default App;
