import "./App.css";
import Routes from "./Routes";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        {Routes.map((route, index) => {
          return <Route {...route} key={index} exact />;
        })}
      </Switch>
    </div>
  );
}

export default App;
