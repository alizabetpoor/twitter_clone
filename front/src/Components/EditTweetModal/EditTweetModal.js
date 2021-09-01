import { useEffect, useRef, useState } from "react";
import { BiX } from "react-icons/bi";
import profilephoto from "../../Images/profile.jpg";
import "./EditTweetModal.css";
import { SetTweetsProvider } from "../../Containers/Tweets/Tweets";

const EditTweetModal = ({
  showEditModal,
  setShowEditModal,
  editTweet,
  setEditTweet,
}) => {
  const { editTweetFunc } = SetTweetsProvider();
  const [text, setText] = useState("");
  const editTweetModalRef = useRef();
  const closeEditModalHandler = () => {
    setShowEditModal(false);
  };
  //   const closeModal = (event) => {
  //     if (!editTweetModalRef.current.contains(event.target)) {
  //       setShowEditModal(false);
  //     }
  //   };
  useEffect(() => {
    setText(editTweet.text);
  }, [editTweet]);
  const submitFormHandler = (e) => {
    e.preventDefault();
    const cloneEditTweet = { ...editTweet };
    cloneEditTweet.text = text;
    editTweetFunc(cloneEditTweet);
    setShowEditModal(false);
  };
  const textareaHandler = (e) => {
    setText(e.target.value);
  };
  //   useEffect(() => {
  //     document.addEventListener("mousedown", closeModal);

  //     return () => {
  //       document.removeEventListener("mousedown", closeModal);
  //     };
  //   });
  return (
    <div
      ref={editTweetModalRef}
      className={`edit-tweet-modal ${
        showEditModal ? "fixed sm:flex" : "hidden"
      } lg:-ml-48 lg:w-96 left-1/2 top-1/2 -mt-28 -ml-40 z-40 bg-bgtwitter flex-col h-56 w-80 rounded-3xl border-2 border-gray-600 p-2`}
    >
      <form className="" onSubmit={submitFormHandler}>
        <div className="justify-between flex p-1 items-center">
          <div className="cursor-pointer">
            <BiX
              onClick={closeEditModalHandler}
              className="h-10 w-10 p-2 hover:bg-hvtwitter transition rounded-full"
            />
          </div>
          <div className="sm:hidden">
            <button
              className="px-4 py-1 bg-blue-500 rounded-full"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-2/12">
            <img src={profilephoto} alt="" className="h-12 w-12 rounded-full" />
          </div>
          <div className="w-10/12 flex flex-col">
            <div className="tweet-textarea">
              <textarea
                name="tweettext"
                className="w-full placeholder-gray-400 text-left pr-2 bg-transparent outline-none text-white text-xl"
                type="text"
                placeholder="What's happening?"
                onChange={textareaHandler}
                value={text}
              ></textarea>
            </div>
            <div className="hidden justify-end mr-1 pt-8 sm:flex">
              <button
                type="submit"
                className="px-4 py-1 bg-blue-500 rounded-full"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTweetModal;
