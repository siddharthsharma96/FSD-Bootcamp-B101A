import "./App.css";
import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";

function App() {
  let [val, setVal] = useState(0);
  let aa = useRef();
  console.log(aa.current.textContent);
  // let [b, setB] = useState(0);
  // useEffect(callback Function,Array of Dependencies)
  // 1. Case Without Array of dependencies:Everytime any state is changing useEffectcallback will run
  // useEffect(() => {
  //   console.log("useEffect is working");
  // });
  // 2.case Empty  Array: it will run only one at the the time staring the project
  // useEffect(() => {
  //   console.log("useEffect is working with empty array");
  // }, []);
  // 3.case With array of dependencies
  useEffect(() => {
    if (val < 0) {
      aa.current.style.color = "red";
      let a = setTimeout(() => {
        setVal(0);
        console.log("created");
      }, 2000);
      // CLeanup FUnction
      return () => {
        clearTimeout(a);
      };
    } else {
      aa.current.style.color = "green";
    }
  }, [val]);
  const handleIncrement = () => {
    setVal(val + 1);
  };
  const handleDecrement = () => {
    // setB(b - 1);
    setVal(val - 1);
  };
  return (
    <div className="App">
      <h1>Our First Small Project</h1>
      <Counter
        aa={aa}
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
}

export default App;
