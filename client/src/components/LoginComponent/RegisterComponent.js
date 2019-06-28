import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchRegister } from "../../actions/RegisterAction";
import {
  successNotification,
  errorNotification
} from "../../actions/NotifyAction";

import {
  Button,
  Form,
  Grid,
  Header,
  Tab,
  Message,
  Segment
} from "semantic-ui-react";
import { Notify } from "react-redux-notify";

class RegisterPage extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    company: "",
    role: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchRegister({ ...this.state }).then(res => {
      if (!res) {
        this.props.errorNotification(this.props.errors);
      }
    });
  };

  handleOnChange = e => { 
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value });
  };

  render() {

    console.log(this.state)
    return (
      <Form
        size="large"
        onSubmit={this.handleSubmit}
        loading={this.props.isFetching}
      >
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="User name"
          value={this.state.user}
          name="username"
          onChange={this.handleOnChange}
        />
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
          value={this.state.user}
          name="email"
          onChange={this.handleOnChange}
        />
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Company Name"
          value={this.state.user}
          name="company"
          onChange={this.handleOnChange}
        />
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Role"
          value={this.state.user}
          name="role"
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
          Register
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

const Login = styled(RegisterPage)``;

export default connect(
  mapStateToProps,
  { fetchRegister, successNotification, errorNotification }
)(Login);
