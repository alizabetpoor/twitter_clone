import Tweets from "../Containers/Tweets/Tweets";
import NewTweetCircle from "../Components/NewTweetCircle/NewTweetCircle";
import MenuMobile from "../Components/MenuMobile/MenuMobile";
import { useState } from "react";
const Home = () => {
  const [showNewTweet, setShowNewTweet] = useState(false);

  const changeShowState = () => {
    setShowNewTweet((prev) => !prev);
  };
  return (
    <>
      <Tweets
        showNewTweet={showNewTweet}
        changeShowState={changeShowState}
        setShowNewTweet={setShowNewTweet}
        newTweetComp={true}
      />
      <NewTweetCircle changeShowState={changeShowState} />
      <MenuMobile />
    </>
  );
};

export default Home;
