import ButtonContainer from "./ButtonContainer";

const Counter = ({ aa, val, handleDecrement, handleIncrement }) => {
  return (
    <div className="container">
      <p ref={aa}>{val}</p>
      <ButtonContainer
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></ButtonContainer>
    </div>
  );
};

export default Counter;
