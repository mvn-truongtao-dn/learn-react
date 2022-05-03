import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Abouts from "../Features/Abouts";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  let { path } = useRouteMatch();
  return (
    <main className="page-main">
      <Switch>
        <Route path={`${path}/login`}>
          <Login />
        </Route>
        <Route path={`${path}/register`}>
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
