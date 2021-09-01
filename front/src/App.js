import "./App.css";
import { ToastProvider } from "react-toast-notifications";
import LeftSide from "./Components/Left/LeftSide";
import RightSide from "./Components/Right/RightSide";
function App() {
  return (
    <div className="App">
      <ToastProvider>
        <div className="app-container flex flex-row relative">
          <RightSide />
          <LeftSide />
        </div>
      </ToastProvider>
    </div>
  );
}

export default App;
