import Right from "./RightSide/Right";
import Center from "./RightSide/Center";
const RightSide = () => {
  return (
    <div className="h-14 w-full md:w-9/12 sm:w-10/12 flex lg:justify-around justify-start fixed right-0 top-0 bg-bgtwitter">
      <Center />
      <Right />
    </div>
  );
};

export default RightSide;
