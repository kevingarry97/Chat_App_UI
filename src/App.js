import { Switch, Route } from "react-router-dom";
import Confirm from "./pages/confirm";
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  return (
    <Switch>
      <Route path={'/auth/:id'} exact component={Confirm} />
      <Route path={'/register'} exact component={Register} />
      <Route path={'/'} exact component={Login} />
    </Switch>
  );
}

export default App;
