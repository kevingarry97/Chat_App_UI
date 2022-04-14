import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoutes";
import Chats from "./pages/chats";
import Confirm from "./pages/confirm";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Switch>
      <ProtectedRoute path={'/message'} component={Chats} />
      <Route path={'/auth/:id'} component={Confirm} />
      <Route path={'/register'} component={Register} />
      <Route path={'/auth'} component={Login} />
      <Redirect from="/" exact to="/auth" />
    </Switch>
  );
}

export default App;
