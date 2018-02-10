import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import AddPage from "./components/AddPage/AddPage";

export default ({}) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/add" component={AddPage} />
    </Switch>
  );
};
