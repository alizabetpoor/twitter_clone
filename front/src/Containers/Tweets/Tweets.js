import "./Tweets.css";
import Tweet from "../../Components/Tweet/Tweet";
import { useState, createContext, useContext } from "react";
import NewTweet from "../../Components/NewTweet/NewTweet";
import EditTweetModal from "../../Components/EditTweetModal/EditTweetModal";

const TweetsContext = createContext();
const SetTweetsContext = createContext();

const Tweets = ({
  showNewTweet,
  changeShowState,
  setShowNewTweet,
  showEditModal,
  setShowEditModal,
  editTweet,
  setEditTweet,
}) => {
  const sampleName = "ali zabetpoor";
  const sampleUserName = "@alizabetpoor";
  const sampleTime = "2h";
  const sampleLike = 3;
  const sampleText = "متن توییتم اینجا باید نوشته شه";
  const setShowEdit = (id) => {
    const cloneTweets = [...tweets];
    const selectedTweet = cloneTweets.find((tweet) => tweet.id === id);
    setEditTweet({ id: id, text: selectedTweet.text });
    setShowEditModal(true);
  };
  const [tweets, setTweets] = useState([
    {
      id: 1,
      name: sampleName,
      username: sampleUserName,
      time: sampleTime,
      like: sampleLike,
      text: "متن اولین توییت",
    },
    {
      id: 2,
      name: sampleName,
      username: sampleUserName,
      like: sampleLike,
      time: sampleTime,
      text: "متن دومین توییت",
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
          <EditTweetModal
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
            editTweet={editTweet}
            setEditTweet={setEditTweet}
          />
          {tweets.map((tweet) => {
            return (
              <Tweet tweet={tweet} key={tweet.id} setShowEdit={setShowEdit} />
            );
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
      id: Math.floor(Math.random() * 10000),
      name: sampleName,
      username: sampleUserName,
      time: sampleTime,
      like: 0,
      text: text,
    };
    const newTweets = [...tweets, newTweet];
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
  const deleteTweet = (id) => {
    const newTweets = tweets.filter((tweet) => tweet.id !== id);
    setTweets(newTweets);
  };
  const editTweetFunc = (editedTweet) => {
    const id = editedTweet.id;
    const index = tweets.findIndex((tweet) => tweet.id === id);
    const cloneTweets = [...tweets];
    cloneTweets[index].text = editedTweet.text;
    setTweets(cloneTweets);
  };

  return { newTweetFunc, increaseOrDecreaseLike, deleteTweet, editTweetFunc };
};
