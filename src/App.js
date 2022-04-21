import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoutes";
import Chats from "./pages/chats";
import Confirm from "./pages/confirm";
import Login from "./pages/login";
import Register from "./pages/register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from "./pages/blogs";
import RequestReset from "./pages/requestReset";
import ResetPassword from "./pages/resetPassword";

function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path={'/auth/passwordReset/:token/:user'} component={ResetPassword} />
        <Route path={'/auth/:id'} component={Confirm} />
        <Route path={'/request'} exact component={RequestReset} />
        <ProtectedRoute path={'/blog'} component={Blogs} />
        <ProtectedRoute path={'/message'} component={Chats} />
        <Route path={'/register'} component={Register} />
        <Route path={'/auth'} component={Login} />
        <Redirect from="/" exact to="/auth" />
      </Switch>
    </>
  );
}

export default App;
