import profilephoto from "../../Images/profile.jpg";
import headerphoto from "../../Images/header.jpg";
import { BiMap, BiLink, BiBulb, BiCalendar } from "react-icons/bi";
import "./ProfileStatus.css";
const ProfileStatus = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="header-profile w-full h-36">
        <img className="header-photo h-full w-full" src={headerphoto} alt="" />
      </div>
      <div className="flex flex-col items-stretch  px-4 pb-2 space-y-2 text-gray-400">
        <div className="flex justify-between items-end -mt-20">
          <img
            className="profile-photo h-32 w-32 rounded-full"
            src={profilephoto}
            alt=""
          />
          <div>
            <p className="border rounded-2xl border-gray-200 px-3 py-1 font-bold text-white">
              edit profile
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-white font-bold text-xl">ali zabetpoor</h3>
          <p>@alizabetpoor</p>
        </div>
        <div className="flex">
          <p>hi i'm ali</p>
        </div>
        <div>
          <ul className="flex profile-ul flex-wrap">
            <li>
              <BiMap />
              <p>Babolsar</p>
            </li>
            <li>
              <BiLink />
              <a href="http://google.com">link</a>
            </li>
            <li>
              <BiBulb />
              <p>Born July 11, 2001</p>
            </li>
            <li>
              <BiCalendar />
              <p>Joined July 2018</p>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <div>
            <span className="text-white font-medium">234</span>{" "}
            <span>following</span>
          </div>
          <div>
            <span className="text-white font-medium">522</span>{" "}
            <span>followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatus;
