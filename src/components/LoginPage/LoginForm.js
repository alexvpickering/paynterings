import React from "react";
import { FormContainer, Form, Input, Button } from "../Form/Form";
import config from "../../config";
import PropTypes from "prop-types";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from "amazon-cognito-identity-js";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  login(email, password) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authenticationData = { Username: email, Password: password };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) =>
      user.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(),
        onFailure: err => reject(err)
      })
    );
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await this.login(this.state.email, this.state.password);
      this.props.updateAuthenticated(true);
      this.props.history.push("/");
    } catch (e) {
      alert(e);
    }
  };

  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <h1>Your account</h1>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button>Sign in</Button>
        </Form>
      </FormContainer>
    );
  }
}

LoginForm.propTypes = {
  updateAuthenticated: PropTypes.func.isRequired
};

export default LoginForm;
