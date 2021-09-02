import Tweets from "../Containers/Tweets/Tweets";
import NewTweetCircle from "../Components/NewTweetCircle/NewTweetCircle";
import MenuMobile from "../Components/MenuMobile/MenuMobile";
import { useState } from "react";
const Home = () => {
  const [showNewTweet, setShowNewTweet] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTweet, setEditTweet] = useState({ id: 0, text: "" });
  const changeShowState = () => {
    setShowNewTweet((prev) => !prev);
  };
  return (
    <>
      <Tweets
        showNewTweet={showNewTweet}
        changeShowState={changeShowState}
        setShowNewTweet={setShowNewTweet}
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        editTweet={editTweet}
        setEditTweet={setEditTweet}
      />
      <NewTweetCircle changeShowState={changeShowState} />
      <MenuMobile />
    </>
  );
};

export default Home;
