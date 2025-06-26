const Buttons = ({ func, value, name }) => {
  return (
    <button className={name} onClick={func}>
      {value}
    </button>
  );
};

export default Buttons;
