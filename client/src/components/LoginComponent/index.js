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
              menuItem: 'Sign in', render: () => <LoginComponent {...this.props} />
            }, {
              menuItem: "Register", render: () => <RegisterComponent {...this.props} />
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

const Login = styled(LoginPage)``;

export default Login;
