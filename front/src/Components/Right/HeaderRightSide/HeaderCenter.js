import profile from "../../../Images/profile.jpg";
import { withRouter } from "react-router";
import "./Center.css";
const HeaderCenter = ({ match }) => {
  return (
    <div className="center flex items-center justify-start w-full md:w-4/5 lg:w-1/2 border-r border-l border-b border-gray-600">
      <div className="block sm:hidden ml-3">
        <img
          src={profile}
          className="rounded-full w-8 h-8 cursor-pointer"
          alt=""
        />
      </div>
      <h4 className="pl-8">
        <a className="text-white text-xl" href="http://google.com">
          {match.params.username ? `${match.params.username}` : "Home"}
        </a>
      </h4>
    </div>
  );
};

export default withRouter(HeaderCenter);
