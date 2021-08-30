import "./App.css";
import LeftSide from "./Components/Left/LeftSide";
import RightSide from "./Components/Right/RightSide";
function App() {
  return (
    <div className="App">
      <div className="container flex flex-row">
        <RightSide />
        <LeftSide />
      </div>
    </div>
  );
}

export default App;
