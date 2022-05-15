import React, { Fragment } from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import {
  authenticatedRoutes,
  authenticationRoutes,
  unAuthenticatedRoutes,
} from "./components/routes/allRoutes";
import Authmiddleware from "./components/routes/middleware/AuthMiddleware";

function App() {
  return (
    <Fragment>
      <Switch>
        {authenticationRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={Layout}
            component={route.component}
            key={idx}
            isAuthProtected={false}
          />
        ))}

        {authenticatedRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={Layout}
            component={route.component}
            key={idx}
            isAuthProtected={true}
          />
        ))}

        {unAuthenticatedRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={Layout}
            component={route.component}
            key={idx}
            isAuthProtected={false}
          />
        ))}
      </Switch>
    </Fragment>
  );
}

export default App;
