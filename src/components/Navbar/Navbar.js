import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateAuthenticated } from "../../actions/actionCreators";
import PropTypes from "prop-types";
import { signOutUser } from "../../libs/awsLib";
import Logo from "./Logo";
import Header from "./Header";

class Navbar extends React.Component {
  handleLogout = event => {
    event.preventDefault();

    signOutUser();
    this.props.updateAuthenticated(false);
    this.props.history.push("/");
  };

  render() {
    const { sticky, isAuthenticated } = this.props;
    return (
      <Header sticky={sticky} isAuthenticated={isAuthenticated}>
        <Logo to="/" isAuthenticated={isAuthenticated}>
          <i className="fa fa-home" />
          <span className="paynterings">Paynterings</span>
        </Logo>
        {isAuthenticated ? (
          <div>
            <Link to="/add">add</Link>
            <Link to="/logout" onClick={this.handleLogout}>
              logout
            </Link>
          </div>
        ) : (
          <Link to="/login">login</Link>
        )}
      </Header>
    );
  }
}

Navbar.propTypes = {
  sticky: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired,
  updateAuthenticated: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

// connect to store
export default connect(
  state => ({
    isAuthenticated: state.isAuthenticated
  }),
  dispatch => ({
    updateAuthenticated: authenticated => {
      dispatch(updateAuthenticated(authenticated));
    }
  })
)(withRouter(Navbar));
