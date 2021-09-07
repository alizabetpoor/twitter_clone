import Tweets from "../Containers/Tweets/Tweets";
import NewTweetCircle from "../Components/NewTweetCircle/NewTweetCircle";
import Layout from "../Layout/Layout";
import MenuMobile from "../Components/MenuMobile/MenuMobile";
import { useState } from "react";
const Home = () => {
  const [showNewTweet, setShowNewTweet] = useState(false);

  const changeShowState = () => {
    setShowNewTweet((prev) => !prev);
  };
  return (
    <>
      <Layout>
        <Tweets
          showNewTweet={showNewTweet}
          changeShowState={changeShowState}
          setShowNewTweet={setShowNewTweet}
          newTweetComp={true}
        />
        <NewTweetCircle changeShowState={changeShowState} />
        <MenuMobile />
      </Layout>
    </>
  );
};

export default Home;
