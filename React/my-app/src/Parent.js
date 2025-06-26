import GrandChild from "./GrandChild";

const Parent = ({ infoFromGrandParent }) => {
  console.log(infoFromGrandParent, "information under parent");

  return (
    <>
      <h1>Parent Element</h1>
      <GrandChild as={infoFromGrandParent}></GrandChild>
    </>
  );
};
export default Parent;
