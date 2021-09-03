import { ToastProvider } from "react-toast-notifications";
import LeftSide from "../Components/Left/LeftSide";
import RightSide from "../Components/Right/RightSide";

const Layout = ({ children }) => {
  return (
    <ToastProvider>
      <div className="app-container flex flex-row relative">
        <RightSide children={children} />
        <LeftSide />
      </div>
    </ToastProvider>
  );
};

export default Layout;
