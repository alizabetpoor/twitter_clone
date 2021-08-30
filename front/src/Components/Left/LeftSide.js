import {
  BiHomeCircle,
  BiBell,
  BiStoreAlt,
  BiEnvelope,
  BiBookmark,
  BiListUl,
  BiUser,
} from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io5";
import { FiMoreHorizontal, FiEdit } from "react-icons/fi";
import "./Left.css";
import profile from "../../Images/profile.jpg";

const LeftSide = () => {
  return (
    <div className="left h-full w-3/12 fixed flex flex-col items-end xl:items-center justify-between">
      <div className="left-top flex flex-col items-center">
        <div className="logo-menu flex justify-center">
          <a href="#">
            <IoLogoTwitter />
          </a>
        </div>
        <ul className="menu flex flex-col items-center">
          <a href="#">
            <li className="flex items-center">
              <BiHomeCircle className="m-0 xl:mr-3 my-2 xl:rounded-full" />
              <p className="hidden xl:block">Home</p>
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiStoreAlt className="m-0 xl:mr-3 my-2 xl:rounded-full" />
              <p className="hidden xl:block">Explore</p>
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiBell className="m-0 xl:mr-3 my-2 xl:rounded-full" />
              <p className="hidden xl:block">Notifications</p>
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiEnvelope className="m-0 xl:mr-3 my-2 xl:rounded-full" />
              <p className="hidden xl:block">Messages</p>
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiBookmark className="m-0 xl:mr-3 my-2 xl:rounded-full" />
              <p className="hidden xl:block">Bookmarks</p>
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiListUl className="m-0 xl:mr-3 my-2 xl:rounded-full" />
              <p className="hidden xl:block">Lists</p>
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiUser className="m-0 xl:mr-3 my-2 xl:rounded-full" />
              <p className="hidden xl:block">Profile</p>
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <FiMoreHorizontal className="m-0 xl:mr-3 my-2 xl:rounded-full" />
              <p className="hidden xl:block">More</p>
            </li>
          </a>
        </ul>
        <button className="xl:block hidden mt-2 px-16 py-2 text-lg bg-blue-500 hover:bg-blue-600 font-bold rounded-3xl">
          tweet
        </button>
        <div className="xl:hidden rounded-full h-12 w-12 cursor-pointer bg-blue-500 hover:bg-blue-600 mt-2 text-center p-3 flex justify-center items-center">
          <FiEdit className=" text-3xl text-white" />
        </div>
      </div>
      <div className="">
        <div className="transition acount-container cursor-pointer px-3 py-1 rounded-3xl profile mb-8 flex justify-around items-center hover:bg-hvtwitter">
          <div className="flex justify-start items-center">
            <div className="xl:pl-2 xl:mr-2">
              <img className="rounded-full w-10 h-10" src={profile} alt="" />
            </div>
            <div className="text-left hidden xl:block">
              <p>ali zabetpoor</p>
              <p>@alizabetpoor</p>
            </div>
          </div>
          <div className="pr-2 ml-12  hidden xl:block">
            <FiMoreHorizontal className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
