import Tweets from "../../../Containers/Tweets/Tweets";
import NewTweetCircle from "../../NewTweetCircle/NewTweetCircle";
import MenuMobile from "../../MenuMobile/MenuMobile";
import { useState } from "react";
const BodyCenter = () => {
  const [showNewTweet, setShowNewTweet] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTweet, setEditTweet] = useState({ id: 0, text: "" });
  const changeShowState = () => {
    setShowNewTweet((prev) => !prev);
  };
  return (
    <div className="body-center flex flex-col items-center justify-center w-full md:w-4/5 lg:w-1/2 border-r border-l border-gray-600">
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
    </div>
  );
};

export default BodyCenter;
