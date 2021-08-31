import "./Tweets.css";
import Tweet from "../../Components/Tweet/Tweet";
import { useState, createContext, useContext } from "react";
import NewTweet from "../../Components/NewTweet/NewTweet";
const TweetsContext = createContext();
const SetTweetsContext = createContext();

const Tweets = ({ showNewTweet, changeShowState, setShowNewTweet }) => {
  const sampleName = "ali zabetpoor";
  const sampleUserName = "@alizabetpoor";
  const sampleTime = "2h";
  const sampleLike = 3;
  const sampleText = "متن توییتم اینجا باید نوشته شه";
  const [tweets, setTweets] = useState([
    {
      id: 1,
      name: sampleName,
      username: sampleUserName,
      time: sampleTime,
      like: sampleLike,
      text: sampleText,
    },
    {
      id: 2,
      name: sampleName,
      username: sampleUserName,
      like: sampleLike,
      time: sampleTime,
      text: sampleText,
    },
    {
      id: 3,
      name: sampleName,
      username: sampleUserName,
      like: sampleLike,
      time: sampleTime,
      text: sampleText,
    },
    {
      id: 4,
      name: sampleName,
      username: sampleUserName,
      like: sampleLike,
      time: sampleTime,
      text: sampleText,
    },
    {
      id: 5,
      name: sampleName,
      username: sampleUserName,
      like: sampleLike,
      time: sampleTime,
      text: sampleText,
    },
  ]);
  return (
    <TweetsContext.Provider value={tweets}>
      <SetTweetsContext.Provider value={setTweets}>
        <div className="tweets-container w-full pb-14 sm:pb-0">
          <NewTweet
            showNewTweet={showNewTweet}
            changeShowState={changeShowState}
            setShowNewTweet={setShowNewTweet}
          />
          {tweets.map((tweet, index) => {
            return <Tweet tweet={tweet} key={index} />;
          })}
        </div>
      </SetTweetsContext.Provider>
    </TweetsContext.Provider>
  );
};

export default Tweets;

export const TweetsProvider = () => useContext(TweetsContext);

export const SetTweetsProvider = () => {
  const setTweets = useContext(SetTweetsContext);
  const tweets = useContext(TweetsContext);
  const sampleName = "ali zabetpoor";
  const sampleUserName = "@alizabetpoor";
  const sampleTime = "2h";
  const newTweetFunc = (text) => {
    const newTweet = {
      id: tweets.length + 1,
      name: sampleName,
      username: sampleUserName,
      time: sampleTime,
      like: 0,
      text: text,
    };
    const newTweets = [newTweet, ...tweets];
    setTweets(newTweets);
  };
  const increaseOrDecreaseLike = (id, state) => {
    const index = tweets.findIndex((tweet) => tweet.id === id);
    const newTweets = [...tweets];
    const selectedTweet = { ...newTweets[index] };
    if (state) {
      selectedTweet.like -= 1;
    } else {
      selectedTweet.like += 1;
    }
    newTweets[index] = selectedTweet;
    setTweets(newTweets);
  };

  return { newTweetFunc, increaseOrDecreaseLike };
};
