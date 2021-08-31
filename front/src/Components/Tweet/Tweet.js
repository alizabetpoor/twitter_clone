import "./Tweet.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import { BiHeart, BiRepeat, BiUpload, BiMessageRounded } from "react-icons/bi";
import { SetTweetsProvider } from "../../Containers/Tweets/Tweets";
import profilephoto from "../../Images/profile.jpg";
import TweetMore from "../TweetMore/TweetMore";
const Tweet = ({ tweet }) => {
  const { increaseOrDecreaseLike } = SetTweetsProvider();
  const [liked, setLiked] = useState(false);
  const [showTweetMore, setShowTweetMore] = useState(false);
  const likeHandler = (id) => {
    increaseOrDecreaseLike(id, liked);
    setLiked((prev) => !prev);
  };
  const handleTweetMore = () => {
    setShowTweetMore((prev) => !prev);
  };

  return (
    <div className="tweet-container flex border-t border-b border-gray-600 py-2 transition cursor-pointer">
      <div className="w-2/12 ml-2">
        <img src={profilephoto} alt="" className="h-12 w-12 rounded-full" />
      </div>
      <div className="flex flex-col w-10/12">
        <div className="flex justify-between">
          <div className="flex">
            <p>{tweet.name}</p>
            <p className="text-gray-400"> {tweet.username}</p>
            <p className="text-gray-400">. {tweet.time}</p>
          </div>
          <div className="relative">
            <FiMoreHorizontal
              onClick={handleTweetMore}
              className="transition hover:bg-hvtwitter  hover:text-blue-500 rounded-full h-10 w-10 p-3 mr-2"
            />
            {showTweetMore && <TweetMore setShowTweetMore={setShowTweetMore} />}
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <p className="px-2 text-right">{tweet.text}</p>
        </div>
        <div>
          <ul className="flex py-2 justify-start text-left">
            <li>
              <BiMessageRounded className="transition hover:bg-hvtwitter hover:text-blue-500 rounded-full h-10 w-10 p-3" />
              <p>4</p>
            </li>
            <li>
              <BiRepeat className="transition hover:bg-hvtwitter hover:text-green-500 rounded-full h-10 w-10 p-3" />
              <p>3</p>
            </li>
            <li>
              <BiHeart
                onClick={() => likeHandler(tweet.id)}
                className={`${
                  liked && "text-red-500"
                } transition hover:bg-hvtwitter hover:text-red-500 rounded-full h-10 w-10 p-3`}
              />
              <p>{tweet.like}</p>
            </li>
            <li>
              <BiUpload className="transition hover:bg-hvtwitter hover:text-blue-500 rounded-full h-10 w-10 p-3" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
