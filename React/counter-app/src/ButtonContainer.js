import Buttons from "./Buttons";
// import Decrement from "./Decremnt";
// import Increment from "./Increment";

const ButtonContainer = ({ handleDecrement, handleIncrement }) => {
  return (
    <div id="buttonContainer">
      <Buttons
        func={handleIncrement}
        value={"Incremented"}
        name={"inc"}
      ></Buttons>
      <Buttons
        func={handleDecrement}
        value={"decremented"}
        name={"dec"}
      ></Buttons>

      {/* <Increment handleIncrement={handleIncrement}></Increment>
      <Decrement handleDecrement={handleDecrement}></Decrement> */}
    </div>
  );
};
export default ButtonContainer;
