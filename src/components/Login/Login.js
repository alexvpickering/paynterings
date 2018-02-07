import React from "react";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";

const Login = ({ sticky, navHeight, getNavHeight }) => {
  console.log("rendering");
  return (
    <div>
      <Navbar getNavHeight={getNavHeight} sticky={sticky} />
      <LoginForm />
    </div>
  );
};

Login.propTypes = {
  sticky: PropTypes.bool.isRequired,
  navHeight: PropTypes.number.isRequired,
  getNavHeight: PropTypes.func.isRequired
};

export default Login;
