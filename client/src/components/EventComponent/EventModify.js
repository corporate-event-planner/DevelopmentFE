import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { getTask, updateTask } from '../../EventModifyAction'

class EventModify extends React.Component {
    state = {
        name: '',
        companyname: '',
        date: null,
        budget: '',
        description: '',
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Event Name</label>
              <input onChange={this.handleOnChange} placeholder='Event Name' value={this.state.name} name={"name"} />
            </Form.Field>
            <Form.Field>
              <label>Company Name</label>
              <input onChange={this.handleOnChange} placeholder='Company' value={this.state.companyname} name={"companyname"} />
            </Form.Field>
            <Form.Field>
              <label>Date</label>
              <input onChange={this.handleOnChange} placeholder='Date' value={this.state.date} name={"date"} />
            </Form.Field>
            <Form.Field>
              <label>Budget</label>
              <input onChange={this.handleOnChange} placeholder='Bugdet' value={this.state.budget} name={"budget"} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input onChange={this.handleOnChange} placeholder='Description' value={this.state.description} name={"description"} />
            </Form.Field>
            <Button positive type='submit'>Edit</Button>
          </Form>
        )
    }

    componentDidMount() {
        this.props.getTask().then(res => {
        this.setState({ ...res });
        console.log(res);
    } }
}

export default connect(null, { get, updateProfile })(EditProfile);