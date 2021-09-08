import profilephoto from "../../Images/profile.jpg";
import {
  BiDotsHorizontalRounded,
  BiHeart,
  BiRepeat,
  BiUpload,
  BiMessageRounded,
} from "react-icons/bi";
import "./FullTweet.css";
import TweetMore from "../TweetMore/TweetMore";
import { useState } from "react";
import Replies from "../Replies/Replies";
const FullTweet = ({ match }) => {
  const idTweet = match.params.id;
  const [showTweetMore, setShowTweetMore] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleTweetMore = () => {
    setShowTweetMore((prev) => !prev);
  };
  return (
    <div className="fulltweet-container flex flex-col w-full text-left text-gray-400 ">
      <div className="p-3 space-y-2">
        <div className="flex justify-between">
          <div className="flex">
            <div>
              <img
                src={profilephoto}
                alt=""
                className="h-12 w-12 rounded-full"
              />
            </div>
            <div className="flex flex-col pl-2">
              <p className="text-white">ali zabetpoor</p>
              <p>@alizabetpoor</p>
            </div>
          </div>
          <div>
            <BiDotsHorizontalRounded
              onClick={handleTweetMore}
              className="transition h-11 w-11 cursor-pointer rounded-full hover:bg-hvtwitter p-3"
            />
            {/* {showTweetMore && (
            <TweetMore
              setShowTweetMore={setShowTweetMore}
              tweetId={idTweet}
              setShowEdit={setShowEdit}
            />
          )} */}
          </div>
        </div>
        <div className="flex justify-end text-white text-2xl font-semibold">
          <p>متن توییت</p>
        </div>
        <div>
          <p>5:42 PM · Sep 4, 2021</p>
        </div>
        <hr />
        <div>
          <span className="text-white">14</span>
          <span> Likes</span>
        </div>
        <hr />
        <div>
          <ul className="flex justify-start icon-full-tweet">
            <li>
              <BiMessageRounded className="transition hover:bg-hvtwitter hover:text-blue-500 rounded-full h-12 w-12 p-3" />
            </li>
            <li>
              <BiRepeat className="transition hover:bg-hvtwitter hover:text-green-500 rounded-full h-12 w-12 p-3" />
            </li>
            <li>
              <BiHeart
                className={`transition hover:bg-hvtwitter hover:text-red-500 rounded-full h-12 w-12 p-3`}
              />
            </li>
            <li>
              <BiUpload className="transition hover:bg-hvtwitter hover:text-blue-500 rounded-full h-12 w-12 p-3" />
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col">
          <div className="pl-14 text-sm">
            <p>
              Replying to
              <span className="text-blue-400">
                <a href="http://google.com"> @elham7767</a>
              </span>
            </p>
          </div>
          <div className="flex">
            <img src={profilephoto} alt="" className="h-12 w-12 rounded-full" />
            <input
              className="bg-transparent px-3 flex-grow outline-none text-xl font-normal"
              type="text"
              placeholder="Tweet your reply"
            />
          </div>
          <div className="flex justify-end">
            <button className="px-5 py-2 text-white bg-blue-500 text-sm font-semibold rounded-3xl">
              Reply
            </button>
          </div>
        </div>
      </div>
      <Replies />
      <Replies />
    </div>
  );
};

export default FullTweet;
