import "./App.css";
import Layout from "./Layout/Layout";
import Routes from "./Routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            {Routes.map((route, index) => {
              return <Route {...route} key={index} />;
            })}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
