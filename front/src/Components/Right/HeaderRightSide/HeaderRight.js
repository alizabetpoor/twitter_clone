const HeaderRight = () => {
  return (
    <div className="right hidden lg:flex items-center justify-center w-1/2">
      <input
        type="search"
        className="bg-hvtwitter text-gray-400 rounded-full px-12 h-4/5 focus:bg-bgtwitter focus:border-blue-300 ml-12"
        placeholder="Search Twitter"
      />
    </div>
  );
};

export default HeaderRight;
