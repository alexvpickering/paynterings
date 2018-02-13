import React from "react";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { updateAuthenticated } from "../../actions/actionCreators";

const LoginPage = ({ history, updateAuthenticated }) => {
  return (
    <div>
      <Navbar sticky={true} />
      <LoginForm updateAuthenticated={updateAuthenticated} history={history} />
    </div>
  );
};

LoginPage.propTypes = {
  updateAuthenticated: PropTypes.func.isRequired
};

// connect to store
export default connect(null, dispatch => ({
  updateAuthenticated: authenticated => {
    dispatch(updateAuthenticated(authenticated));
  }
}))(LoginPage);
