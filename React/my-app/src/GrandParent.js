import Parent from "./Parent";

const GrandParent = ({ info }) => {
  console.log(info, "information under grandparent");
  return (
    <>
      <h1>GrandParent Component</h1>
      <Parent infoFromGrandParent={info}></Parent>
    </>
  );
};

export default GrandParent;
