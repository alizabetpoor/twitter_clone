import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import TweetPage from "./Pages/TweetPage";
const Routes = [
  { path: "/", component: Home },
  { path: "/profile/:username", component: Profile },
  { path: "/tweet/:id", component: TweetPage },
  { component: NotFound },
];

export default Routes;
