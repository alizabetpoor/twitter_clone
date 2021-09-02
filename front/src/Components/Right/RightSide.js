import HeaderRight from "./HeaderRightSide/HeaderRight";
import HeaderCenter from "./HeaderRightSide/HeaderCenter";
import BodyCenter from "./BodyRightSide/BodyCenter";
import BodyRight from "./BodyRightSide/BodyRight";
const RightSide = ({ children }) => {
  return (
    <div className="flex flex-col w-full sm:w-10/12 md:w-9/12 absolute right-0 top-0 ">
      <div className="header z-20 w-full sm:w-10/12 md:w-9/12 h-14 fixed flex lg:justify-around justify-start right-0 top-0 bg-bgtwitter">
        <HeaderCenter />
        <HeaderRight />
      </div>

      <div className="body w-full absolute flex lg:justify-around justify-start top-14 right-0 bg-bgtwitter">
        <BodyCenter children={children} />
        <BodyRight />
      </div>
    </div>
  );
};

export default RightSide;
