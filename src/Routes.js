import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import AddPage from "./components/AddPage/AddPage";

export default ({
  sticky,
  navHeight,
  getNavHeight,
  isAuthenticated,
  userHasAuthenticated,
  handleLogout
}) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <HomePage
            {...props}
            sticky={sticky}
            navHeight={navHeight}
            getNavHeight={getNavHeight}
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
          />
        )}
      />
      <Route
        exact
        path="/login"
        render={props => (
          <LoginPage
            {...props}
            navHeight={navHeight}
            getNavHeight={getNavHeight}
            isAuthenticated={isAuthenticated}
            userHasAuthenticated={userHasAuthenticated}
            handleLogout={handleLogout}
          />
        )}
      />
      <Route
        exact
        path="/add"
        render={props => (
          <AddPage
            {...props}
            navHeight={navHeight}
            getNavHeight={getNavHeight}
            handleLogout={handleLogout}
          />
        )}
      />
    </Switch>
  );
};
