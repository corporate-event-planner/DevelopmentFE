import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchLogin } from "../../actions/LoginAction";
import {
  successNotification,
  errorNotification
} from "../../actions/NotifyAction";

import {
  Button, Form, Grid, Header, Tab, Message, Segment
} from "semantic-ui-react";
import { Notify } from "react-redux-notify";
import RegisterComponent from "./RegisterComponent"
import LoginComponent from "./LoginComponent";

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
          <Segment>
            <Header as="h2" textAlign="center">
              Log-in to your account
          </Header>

            <Tab panes={[{
              menuItem: 'Sign in', render: () => <LoginComponent />
            }, {
              menuItem: "Register", render: () => <RegisterComponent />
            }]} />

          </Segment>
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
