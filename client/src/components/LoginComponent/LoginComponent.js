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

      <Form size="large" onSubmit={this.handleSubmit}>

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
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isRegistered: state.registerReducer.isRegistered,
  isFetching: state.registerReducer.isFetching,
  errors: state.registerReducer.errors
});

const Login = styled(LoginPage)``;

export default connect(
  mapStateToProps,
  { fetchLogin, successNotification, errorNotification }
)(Login);
