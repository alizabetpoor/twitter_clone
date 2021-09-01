import profilephoto from "../../Images/profile.jpg";
import "./NewTweet.css";
import { SetTweetsProvider } from "../../Containers/Tweets/Tweets";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";

const NewTweet = ({ showNewTweet, changeShowState, setShowNewTweet }) => {
  const { newTweetFunc } = SetTweetsProvider();
  const [tweetText, setTweetText] = useState("");
  const tweetTextHandler = (e) => {
    setTweetText(e.target.value);
  };
  const makeNewTweet = (e) => {
    e.preventDefault();
    if (tweetText !== "") {
      newTweetFunc(tweetText);
      setTweetText("");
      setShowNewTweet(false);
    }
  };
  return (
    <div
      className={`newtweet-container ${
        showNewTweet ? "fixed" : "hidden"
      } sm:static z-20 bg-bgtwitter sm:flex flex-col w-full border-t border-gray-600 p-2`}
    >
      <form onSubmit={makeNewTweet}>
        <div className="sm:hidden justify-between flex p-2 items-center">
          <div className="cursor-pointer" onClick={changeShowState}>
            <BiArrowBack className="h-10 w-10 p-2 hover:bg-hvtwitter transition rounded-full" />
          </div>
          <div>
            <button
              className="px-4 py-1 bg-blue-500 rounded-full"
              type="submit"
            >
              tweet
            </button>
          </div>
        </div>
        <div className="flex w-full ">
          <div className="w-2/12">
            <img src={profilephoto} alt="" className="h-12 w-12 rounded-full" />
          </div>
          <div className="w-10/12 flex flex-col">
            <div className="tweet-textarea">
              <textarea
                name="tweettext"
                className="w-full placeholder-gray-400 text-left pr-2 bg-transparent outline-none text-white text-xl"
                type="text"
                placeholder="What's happening?"
                onChange={tweetTextHandler}
                value={tweetText}
              ></textarea>
            </div>
            <div className="hidden justify-end mr-1 pt-8 sm:flex">
              <button
                type="submit"
                className="px-4 py-1 bg-blue-500 rounded-full"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTweet;
