import React from "react";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";

const LoginPage = ({
  history,
  navHeight,
  getNavHeight,
  userHasAuthenticated,
  isAuthenticated,
  handleLogout
}) => {
  return (
    <div>
      <Navbar
        getNavHeight={getNavHeight}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
      <LoginForm
        userHasAuthenticated={userHasAuthenticated}
        history={history}
      />
    </div>
  );
};

LoginPage.propTypes = {
  navHeight: PropTypes.number.isRequired,
  getNavHeight: PropTypes.func.isRequired
};

export default LoginPage;
