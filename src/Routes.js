import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { history } from "./store";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import AddPage from "./components/AddPage/AddPage";

export default () => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/add" component={AddPage} />
      </div>
    </ConnectedRouter>
  );
};
