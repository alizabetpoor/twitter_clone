import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
const Routes = [
  { path: "/", exact: true, component: Home },
  { path: "/profile/:username", component: Profile },
  { component: NotFound },
];

export default Routes;
