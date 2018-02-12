import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import AddPage from "./components/AddPage/AddPage";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const Routes = ({ isAuthenticated }) => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <UnauthenticatedRoute
          exact
          path="/login"
          component={LoginPage}
          props={{ isAuthenticated }}
        />
        <AuthenticatedRoute
          exact
          path="/add"
          component={AddPage}
          props={{ isAuthenticated }}
        />
      </div>
    </Router>
  );
};

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(state => ({
  isAuthenticated: state.isAuthenticated
}))(Routes);
