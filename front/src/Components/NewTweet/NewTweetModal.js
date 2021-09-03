import { BiUndo } from "react-icons/bi";
import profilephoto from "../../Images/profile.jpg";
import { SetTweetsProvider } from "../../Containers/Tweets/Tweets";
import { Input } from "antd";

const NewTweetModal = ({ showNewTweet, changeShowState }) => {
  const makeNewTweet = SetTweetsProvider().newTweetFunc;
  const { TextArea } = Input;

  return (
    <div
      className={`newtweet-modal-container hidden sm:${
        showNewTweet ? "fixed" : "hidden"
      } w-3/5 h-2/5 z-20 bg-bgtwitter sm:flex flex-col border-t border-gray-600 p-2`}
    >
      <div className="">
        <form onSubmit={makeNewTweet}>
          <div className="justify-start flex p-2 items-center">
            <div className="cursor-pointer" onClick={changeShowState}>
              <BiUndo className="h-10 w-10 p-2 hover:bg-hvtwitter transition rounded-full" />
            </div>
          </div>
          <div className="flex w-full ">
            <div className="w-2/12">
              <img
                src={profilephoto}
                alt=""
                className="h-12 w-12 rounded-full"
              />
            </div>
            <div className="w-10/12 flex flex-col">
              <div className="tweet-textarea">
                <TextArea
                  name="tweettext"
                  className="w-full placeholder-gray-400 text-left pr-2 bg-transparent outline-none text-white text-xl"
                  type="text"
                  placeholder="What's happening?"
                  autoSize={{ minRows: 2, maxRows: 10 }}
                />
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
    </div>
  );
};

export default NewTweetModal;
