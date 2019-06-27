import React from 'react';
import { connect } from "react-redux"
import { Form, Button } from "semantic-ui-react"

class EditProfile extends React.Component {
  state = {
    username: "",
    email: "",
    companyname: "",
    role: ""
  }

  componentDidMount() {

  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>User Name</label>
          <input onChange={this.handleOnChange} placeholder='User Name' value={this.state.username} name={"username"} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input onChange={this.handleOnChange} placeholder='email' value={this.state.email} name={"email"} />
        </Form.Field>
        <Form.Field>
          <label>Company</label>
          <input onChange={this.handleOnChange} placeholder='Company' value={this.state.companyname} name={"companyname"} />
        </Form.Field>
        <Form.Field>
          <label>role</label>
          <input onChange={this.handleOnChange} placeholder='role' value={this.state.role} name={"role"} />
        </Form.Field>
        <Button positive type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default connect(null, {})(EditProfile);