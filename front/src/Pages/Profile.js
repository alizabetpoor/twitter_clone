import Tweets from "../Containers/Tweets/Tweets";
import { useState } from "react";
import ProfileStatus from "../Components/ProfileStatus/ProfileStatus";

const Profile = ({ match }) => {
  const [showNewTweet, setShowNewTweet] = useState(false);
  const changeShowState = () => {
    setShowNewTweet((prev) => !prev);
  };
  return (
    <>
      <ProfileStatus />
      <Tweets
        showNewTweet={showNewTweet}
        changeShowState={changeShowState}
        setShowNewTweet={setShowNewTweet}
        newTweetComp={false}
      />
    </>
  );
};

export default Profile;
