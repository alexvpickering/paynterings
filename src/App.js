import React from "react";
import Routes from "./Routes";
import { authUser } from "./libs/awsLib";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateSticky } from "./actions/actionCreators";

class App extends React.Component {
  handleScroll = event => {
    const { navHeight, sticky: oldSticky, updateSticky } = this.props,
      newSticky = window.pageYOffset > window.innerHeight - navHeight;

    if (newSticky !== oldSticky) updateSticky(newSticky);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return this.props.isAuthenticating && <Routes />;
  }
}

App.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
  navHeight: PropTypes.number.isRequired,
  sticky: PropTypes.bool.isRequired,
  updateSticky: PropTypes.func.isRequired
};

export default connect(
  state => ({
    isAuthenticating: state.isAuthenticating,
    sticky: state.sticky,
    navHeight: state.navHeight
  }),

  dispatch => ({
    updateSticky: sticky => {
      dispatch(updateSticky(sticky));
    }
  })
)(App);
