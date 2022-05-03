import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/userAuth";

export default function PrivateRoute({ children, ...rest }) {
  let { isLogged } = useAuth();
  console.log(rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect to={{ pathname: "/auth/login"}} />
        )
      }
    />
  );
}
