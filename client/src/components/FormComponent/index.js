import React from "react";
import {
  Button,
  Input,
  Label,
  Form,
  Grid,
  Accordion,
  Menu
} from "semantic-ui-react";
import { connect } from "react-redux";
import { postEvent } from "../../actions/EventsAction";
import {
  successNotification,
  errorNotification
} from "../../actions/NotifyAction";
import { Notify } from "react-redux-notify";

const ColorForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Red" name="color" value="red" />
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);

const SizeForm = (
  <Form>
    <Form.Group grouped>
      <Form.Radio label="Small" name="size" type="radio" value="small" />
      <Form.Radio label="Medium" name="size" type="radio" value="medium" />
      <Form.Radio label="Large" name="size" type="radio" value="large" />
      <Form.Radio label="X-Large" name="size" type="radio" value="x-large" />
    </Form.Group>
  </Form>
);

class EventsForm extends React.Component {
  state = {
    name: "",
    description: "",
    budget: "",
    activeIndex: 0
  };

  handleOnChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleOnSubmit = () => {
    const { name, description, budget } = this.state;

    this.props.postEvent({ name, description, budget, date: this.props.date }).then(res => {
      if (!res) {
        this.props.errorNotification(this.props.errors);
        return;
      }
      this.props.closeModal().then(res => {
        this.props.successNotification("Event Created");

      });
    });
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <Form
        loading={this.props.isFetching}
        onSubmit={this.handleOnSubmit}
      >
        <Notify />
        <Grid columns="two">
          <Grid.Row>
            <Grid.Column>
              <Form.Field>
                <label>Event Name</label>
                <input
                  placeholder="Name"
                  name="name"
                  onChange={this.handleOnChange}
                  value={this.state.name}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Description</label>
                <input
                  placeholder="Description"
                  name="description"
                  onChange={this.handleOnChange}
                  value={this.state.description}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Field>
                <label>Budget</label>
                <Input labelPosition="right" type="text" placeholder="Amount">
                  <Label basic>$</Label>
                  <input
                    name="budget"
                    onChange={this.handleOnChange}
                    value={this.state.budget}
                  />
                  <Label>.00</Label>
                </Input>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row stretched>
            <Grid.Column>
              <Accordion as={Menu} vertical>
                <Menu.Item>
                  <Accordion.Title
                    active={activeIndex === 0}
                    content="Size"
                    index={0}
                    onClick={this.handleClick}
                  />
                  <Accordion.Content
                    active={activeIndex === 0}
                    content={SizeForm}
                  />
                </Menu.Item>

                <Menu.Item>
                  <Accordion.Title
                    active={activeIndex === 1}
                    content="Colors"
                    index={1}
                    onClick={this.handleClick}
                  />
                  <Accordion.Content
                    active={activeIndex === 1}
                    content={ColorForm}
                  />
                </Menu.Item>
              </Accordion>
            </Grid.Column>
          </Grid.Row> */}
          <Grid.Row>
            <Grid.Column>
              <Button
                onClick={this.props.onClose}
                positive
                labelPosition="right"
                icon="checkmark"
                content="Create Event"
              />
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Button onClick={this.props.onClose} negative>
                Cancel
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.eventsReducer.isFetching,
  errors: state.eventsReducer.errors
});

export default connect(
  mapStateToProps,
  { postEvent, errorNotification, successNotification }
)(EventsForm);
