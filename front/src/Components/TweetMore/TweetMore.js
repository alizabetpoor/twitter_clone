import "./TweetMore.css";
import { BiEditAlt, BiTrash, BiDotsHorizontalRounded } from "react-icons/bi";
import { useEffect, useRef } from "react";
import { SetTweetsProvider } from "../../Containers/Tweets/Tweets";
const TweetMore = ({ setShowTweetMore, tweetId, setShowEdit }) => {
  const { deleteTweet } = SetTweetsProvider();
  const showTweetMoreRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!showTweetMoreRef.current.contains(event.target)) {
        setShowTweetMore((prev) => !prev);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const deleteHandler = (tweetId) => {
    deleteTweet(tweetId);
    setShowTweetMore(false);
  };
  const updateHandler = (tweetId) => {
    setShowEdit(tweetId);
    setShowTweetMore(false);
  };

  return (
    <div
      ref={showTweetMoreRef}
      className="tweet-more bg-bgtwitter absolute right-2 z-10 top-0 w-60  shadow-lg rounded-lg border border-gray-200"
    >
      <ul className="flex flex-col items-stretch">
        <li onClick={() => deleteHandler(tweetId)}>
          <BiTrash />
          <span>Delete</span>
        </li>
        <li onClick={() => updateHandler(tweetId)}>
          <BiEditAlt />
          <span>Edit</span>
        </li>
        <li>
          <BiDotsHorizontalRounded />
          <span>More</span>
        </li>
      </ul>
    </div>
  );
};

export default TweetMore;
