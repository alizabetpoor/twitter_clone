import "./App.css";
import Layout from "./Layout/Layout";
import Routes from "./Routes";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {Routes.map((route, index) => {
            return <Route {...route} key={index} exact />;
          })}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
