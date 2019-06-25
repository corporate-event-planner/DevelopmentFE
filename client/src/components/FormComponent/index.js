import React from 'react';
import { Button, Input, Label, Form } from 'semantic-ui-react'

export default class EventsForm extends React.Component {
  render() {
    return (
      <Form>
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
          <input placeholder='Budget' name="Budget" />
        </Form.Field>
        <Form.Field>
          <Input labelPosition='right' type='text' placeholder='Amount'>
            <Label basic>$</Label>
            <input />
            <Label>.00</Label>
          </Input>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}