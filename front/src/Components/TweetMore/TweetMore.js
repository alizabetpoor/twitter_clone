import "./TweetMore.css";
import { BiEditAlt, BiTrash, BiDotsHorizontalRounded } from "react-icons/bi";
import { useEffect, useRef } from "react";
const TweetMore = ({ setShowTweetMore }) => {
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

  return (
    <div
      ref={showTweetMoreRef}
      className="tweet-more bg-bgtwitter absolute right-2 z-10 top-0 w-60  shadow-lg rounded-lg border border-gray-200"
    >
      <ul className="flex flex-col items-stretch">
        <li>
          <BiTrash />
          <span>Delete</span>
        </li>
        <li>
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
