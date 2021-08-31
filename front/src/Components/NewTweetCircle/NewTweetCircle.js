import { FiEdit } from "react-icons/fi";

const NewTweetCircle = ({ changeShowState }) => {
  return (
    <div
      onClick={changeShowState}
      className="sm:hidden z-10 rounded-full h-12 w-12 cursor-pointer bg-blue-500 hover:bg-blue-600 mt-2 text-center p-3 flex justify-center items-center fixed bottom-16 right-6"
    >
      <FiEdit className=" text-3xl text-white" />
    </div>
  );
};

export default NewTweetCircle;
