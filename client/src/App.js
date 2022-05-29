import React, { Fragment, useEffect, useState } from "react";
import { Switch, useLocation } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import {
  authenticatedAdminRoutes,
  authenticatedUserRoutes,
  authenticationRoutes,
  unAuthenticatedRoutes,
} from "./components/routes/allRoutes";
import Authmiddleware from "./components/routes/middleware/AuthMiddleware";
import "./assets/scss/theme.scss";

const App = () => {
  let location = useLocation();
  const [userType, setUserType] = useState("");

  useEffect(() => {
    var user = localStorage.getItem("authUser");
    if (user) {
      user = JSON.parse(user);

      if (user.role === "user") setUserType("user");
      else setUserType("admin");
    }
  }, [location]);

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

        {userType === "user" &&
          authenticatedUserRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
            />
          ))}

        {userType === "admin" &&
          authenticatedAdminRoutes.map((route, idx) => (
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
            exact={true}
          />
        ))}
      </Switch>
    </Fragment>
  );
};

export default App;
