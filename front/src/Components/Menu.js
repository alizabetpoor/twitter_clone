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
import { FiMoreHorizontal } from "react-icons/fi";
import "./Menu.css";
import profile from "../Images/profile.jpg";

const Menu = () => {
  return (
    <div className="left h-full w-3/12 fixed flex flex-col items-center justify-between">
      <div>
        <div className="logo-menu flex justify-center">
          <a href="#">
            <IoLogoTwitter />
          </a>
        </div>
        <ul className="menu flex flex-col items-center">
          <a href="#">
            <li className="flex items-center">
              <BiHomeCircle /> Home
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiStoreAlt />
              Explore
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiBell />
              Notifications
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiEnvelope />
              Messages
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiBookmark />
              Bookmarks
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiListUl />
              Lists
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <BiUser />
              Profile
            </li>
          </a>
          <a href="#">
            <li className="flex items-center">
              <FiMoreHorizontal />
              More
            </li>
          </a>
        </ul>
        <button className="mt-2 px-16 py-2 text-lg bg-blue-500 hover:bg-blue-600 font-bold rounded-3xl">
          tweet
        </button>
      </div>
      <div className="">
        <div className="transition cursor-pointer px-3 py-1 rounded-3xl profile mb-8 flex justify-around items-center hover:bg-hvtwitter">
          <div className="flex justify-start items-center">
            <div className="pl-2 mr-2">
              <img className="rounded-full w-10 h-10" src={profile} alt="" />
            </div>
            <div className="text-left">
              <p>ali zabetpoor</p>
              <p>@alizabetpoor</p>
            </div>
          </div>
          <div className="pr-2 ml-12">
            <FiMoreHorizontal className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
