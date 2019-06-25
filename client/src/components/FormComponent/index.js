import React from 'react';
import { Button, Input, Label, Form } from 'semantic-ui-react'
import { connect } from "react-redux";
import { postEvent } from "../../actions/EventsAction";
import {
  successNotification,
  errorNotification
} from "../../actions/NotifyAction";

class EventsForm extends React.Component {
  state = {
    name: "",
    description: "",
    budget: ""
  }

  render() {
    return (
      <Form loading={this.props.isFetching} onSubmit={() => this.props.postEvent(this.state)}>
        <Form.Field>
          <label>Event Name</label>
          <input placeholder='Name' name="name" />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input placeholder='Description' name="description" />
        </Form.Field>
        <Form.Field>
          <label>Budget</label>
          <Input labelPosition='right' type='text' placeholder='Amount'>
            <Label basic>$</Label>
            <input name="budget" />
            <Label>.00</Label>
          </Input>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.eventsReducer.isFetching,
});

export default connect(mapStateToProps, { postEvent })(EventsForm)