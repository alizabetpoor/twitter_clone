import profile from "../../../Images/profile.jpg";
import {FiEdit } from "react-icons/fi";
import {
  BiHomeCircle,
  BiBell,
  BiEnvelope,
  BiSearch,
} from "react-icons/bi";
import "./Center.css"
const Center = () => {

  return (
    <div className="center flex justify-start w-full md:w-4/5 lg:w-1/2 items-center pl-4 sm:pl-12 border-l border-r border-gray-500">
      <div className="block sm:hidden">
        <img src={profile} className="rounded-full w-8 h-8 cursor-pointer" alt="" />
      </div>
      <h4 className="pl-8">
        <a className="text-white text-xl" href="#">
          Home
        </a>
      </h4>
      <div className="sm:hidden rounded-full h-12 w-12 cursor-pointer bg-blue-500 hover:bg-blue-600 mt-2 text-center p-3 flex justify-center items-center fixed bottom-16 right-6">
          <FiEdit className=" text-3xl text-white" />
      </div>
      <div className="menu-mobile fixed bottom-0 right-0 h-14 w-full sm:hidden">
        <ul className="flex items-center h-full">
          <li className="">
            <BiHomeCircle/>
          </li>
          <li className="">
            <BiSearch/>
          </li>
          <li className="">
            <BiBell/>
          </li>
          <li className="">
            <BiEnvelope/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Center;
