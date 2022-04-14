import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoutes";
import Chats from "./pages/chats";
import Confirm from "./pages/confirm";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Switch>
      <ProtectedRoute path={'/message'} component={Chats} />
      <Route path={'/auth/:id'} exact component={Confirm} />
      <Route path={'/register'} exact component={Register} />
      <Route path={'/auth'} exact component={Login} />
    </Switch>
  );
}

export default App;
