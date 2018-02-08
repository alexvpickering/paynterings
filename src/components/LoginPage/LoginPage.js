import React from "react";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";

const LoginPage = ({ navHeight, getNavHeight }) => {
  console.log("rendering");
  return (
    <div>
      <Navbar getNavHeight={getNavHeight} />
      <LoginForm />
    </div>
  );
};

LoginPage.propTypes = {
  navHeight: PropTypes.number.isRequired,
  getNavHeight: PropTypes.func.isRequired
};

export default LoginPage;
