import profilephoto from "../../Images/profile.jpg";
import {
  BiDotsHorizontalRounded,
  BiHeart,
  BiRepeat,
  BiUpload,
  BiMessageRounded,
} from "react-icons/bi";
import "./Reply.css";
const Reply = () => {
  return (
    <div className="reply-container w-full text-left text-gray-400  p-2">
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <img src={profilephoto} className="h-12 w-12 rounded-full" alt="" />
          </div>
          <div className="flex flex-col pl-2">
            <div className="flex">
              <p className="text-white">S.G.L</p>
              <p>@sarahjoon37 . </p>
              <p>Dec 21, 2020</p>
            </div>
            <div>
              <p>
                replying to{" "}
                <a className="text-blue-400" href="http://google.com">
                  @mn_cactus
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <BiDotsHorizontalRounded className="transition h-11 w-11 cursor-pointer rounded-full hover:bg-hvtwitter p-3" />
        </div>
      </div>
      <div className="text-right">
        <p className="text-white">سلام این رپلای منه</p>
      </div>
      <div>
        <ul className="flex justify-start icon-full-tweet">
          <li>
            <BiMessageRounded className="transition hover:bg-hvtwitter hover:text-blue-500 rounded-full h-10 w-10 p-3" />
          </li>
          <li>
            <BiRepeat className="transition hover:bg-hvtwitter hover:text-green-500 rounded-full h-10 w-10 p-3" />
          </li>
          <li>
            <BiHeart
              className={`transition hover:bg-hvtwitter hover:text-red-500 rounded-full h-10 w-10 p-3`}
            />
          </li>
          <li>
            <BiUpload className="transition hover:bg-hvtwitter hover:text-blue-500 rounded-full h-10 w-10 p-3" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reply;
