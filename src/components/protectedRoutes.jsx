import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from '../services/auth'

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.getCurrentUser() || auth.getCurrentUser().isVerified == false)
          return (
            <Redirect
              to={{ pathname: '/auth', state: { from: props.location } }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}  
    />
  );
};

export default ProtectedRoute;
