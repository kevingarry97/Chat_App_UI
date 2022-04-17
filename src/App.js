import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoutes";
import Chats from "./pages/chats";
import Confirm from "./pages/confirm";
import Login from "./pages/login";
import Register from "./pages/register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from "./pages/blogs";
import AdminRoute from "./components/adminRoute";

function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <ProtectedRoute path={'/blog'} component={Blogs} />
        <ProtectedRoute path={'/message'} component={Chats} />
        <Route path={'/auth/:id'} component={Confirm} />
        <AdminRoute path={'/register'} component={Register} />
        <Route path={'/auth'} component={Login} />
        <Redirect from="/" exact to="/auth" />
      </Switch>
    </>
  );
}

export default App;
