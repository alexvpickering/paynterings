import React from "react";
import Routes from "./Routes";
import { authUser } from "./libs/awsLib";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  updateSticky,
  updateAuthenticating,
  updateAuthenticated
} from "./actions/actionCreators";

class App extends React.Component {
  handleScroll = event => {
    const { sticky: oldSticky, updateSticky } = this.props,
      newSticky = window.pageYOffset > window.innerHeight - 102;

    if (newSticky !== oldSticky) updateSticky(newSticky);
  };

  async componentDidMount() {
    try {
      if (await authUser()) {
        this.props.updateAuthenticated(true);
      }
    } catch (error) {
      alert(error);
    }

    this.props.updateAuthenticating(false);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return !this.props.isAuthenticating && <Routes />;
  }
}

App.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
  sticky: PropTypes.bool.isRequired,
  updateSticky: PropTypes.func.isRequired,
  updateAuthenticating: PropTypes.func.isRequired,
  updateAuthenticated: PropTypes.func.isRequired
};

export default connect(
  state => ({
    isAuthenticating: state.isAuthenticating,
    sticky: state.sticky
  }),

  dispatch => ({
    updateSticky: sticky => {
      dispatch(updateSticky(sticky));
    },
    updateAuthenticating: authenticating => {
      dispatch(updateAuthenticating(authenticating));
    },
    updateAuthenticated: authenticated => {
      dispatch(updateAuthenticated(authenticated));
    }
  })
)(App);
