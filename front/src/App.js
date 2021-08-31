import "./App.css";
import LeftSide from "./Components/Left/LeftSide";
import RightSide from "./Components/Right/RightSide";
function App() {
  return (
    <div className="App">
      <div className="app-container flex flex-row relative">
        <RightSide />
        <LeftSide />
      </div>
    </div>
  );
}

export default App;
