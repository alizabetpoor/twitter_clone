const Right = () => {
  return (
    <div className="right flex justify-start w-1/2 items-center">
      <input
        type="search"
        className="bg-hvtwitter text-gray-400 rounded-full px-12 h-4/5 focus:bg-bgtwitter focus:border-blue-300 ml-12"
        placeholder="Search Twitter"
      />
    </div>
  );
};

export default Right;
