import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchLogin } from "../../actions/LoginAction";
import {
  successNotification,
  errorNotification
} from "../../actions/NotifyAction";

import {
  Button, Form, Grid, Header, Image, Message, Segment
} from "semantic-ui-react";
import { Notify } from "react-redux-notify";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchLogin({ ...this.state }).then(res => {
      if (!res) {
        this.props.errorNotification(this.props.errors);
      }
    });
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Notify />
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={this.state.user}
                name="username"
                onChange={this.handleOnChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                value={this.state.password}
                type="password"
                name="password"
                onChange={this.handleOnChange}
              />

              <Button
                fluid
                size="large"
                primary
                loading={this.props.isFetching ? true : false}
                disabled={this.props.isFetching ? true : false}
                type="submit"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn,
  isLoggedOut: state.loginReducer.isLoggedOut,
  isFetching: state.loginReducer.isFetching,
  errors: state.loginReducer.errors
});

const Login = styled(LoginPage)``;

export default connect(
  mapStateToProps,
  { fetchLogin, successNotification, errorNotification }
)(Login);
