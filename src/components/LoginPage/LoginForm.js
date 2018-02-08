import React from "react";
import { FormContainer, Form, Input, Button } from "../Form/Form";

class LoginForm extends React.Component {
  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.onSubmit}>
          <h1>Your account</h1>
          <label>
            Email:
            <Input type="text" />
          </label>
          <label>
            Password:
            <Input type="password" />
          </label>
          <Button>Sign in</Button>
        </Form>
      </FormContainer>
    );
  }
}

export default LoginForm;
