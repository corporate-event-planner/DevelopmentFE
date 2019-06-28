import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { getEvent, updateEvent } from '../../actions/EventModifyAction'

class EventModify extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      companyname: '',
      date: null,
      budget: '',
      description: '',
    }
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
      this.props.getEvent(this.props.eventid).then(res => {
        this.setState({ ...res });
        console.log(res);
      });
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.updateEvent(this.props.eventid, { ...this.state })
      window.location.reload()
    }
  
    handleOnChange = (e) => {
      this.setState({ 
        ...this.state,
        [e.target.name]: e.target.value })
    }
}

export default connect(null, { getEvent, updateEvent })(EventModify);