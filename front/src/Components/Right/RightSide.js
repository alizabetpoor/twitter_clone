import Right from "./RightSide/Right";
import Center from "./RightSide/Center";
const RightSide = () => {
  return (
    <div className="h-14 w-9/12 flex justify-around fixed right-0 top-0 bg-bgtwitter">
      <Center />
      <Right />
    </div>
  );
};

export default RightSide;
