import ButtonContainer from "./ButtonContainer";

const Counter = ({ val, handleDecrement, handleIncrement }) => {
  return (
    <div className="container">
      <p>{val}</p>
      <ButtonContainer
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></ButtonContainer>
    </div>
  );
};

export default Counter;
