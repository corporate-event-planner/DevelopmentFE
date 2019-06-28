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
import styled from "styled-components"
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
  <Form.Group widths='equal'>
    <Form.Field>
      <label>First name</label>
      <Input fluid placeholder='First name' />
    </Form.Field>
    <Form.Field>
      <label>Middle name</label>
      <Input fluid placeholder='Middle name' />
    </Form.Field>
    <Form.Field>
      <label>Last name</label>
      <Input fluid placeholder='Last name' />
    </Form.Field>
  </Form.Group>
);

const panels = [
  {
    key: 'details',
    title: 'Optional Details',
    content: {
      as: Form.Input,
      label: 'Maiden Name',
      placeholder: 'Maiden Name',
    },
  },
]

class EventsForm extends React.Component {
  state = {
    name: "",
    description: "",
    budget: "",
    activeIndex: 0,
    companyname: ""
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

            <Grid.Column>
              <Form.Field>
                <label>Company Name</label>
                <input
                  placeholder="companyname"
                  name="companyname"
                  onChange={this.handleOnChange}
                  value={this.state.companyname}
                />
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
          {/* <Grid.Row stretched>
            <Grid.Column stretched>

              <Accordion as={Menu} vertical style={{ "width": "100%" }}>
                <Menu.Item>
                  <Accordion.Title
                    active={activeIndex === 0}
                    content='Size'
                    index={0}
                    onClick={this.handleClick}
                  />
                  <Accordion.Content active={activeIndex === 0} content={SizeForm} />
                </Menu.Item>
              </Accordion>
            </Grid.Column>
          </Grid.Row> */}
          <Grid.Row>
            <Grid.Column>

              <Button.Group>
                <Button onClick={(e) => {
                  e.preventDefault();
                  this.props.closeModal()
                }} negative>
                  Cancel
              </Button>
                <Button.Or />
                <Button
                  positive
                  labelPosition="right"
                  icon="checkmark"
                  content="Create Event"
                />
              </Button.Group>
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

const StyledAccordion = styled(Accordion)`
  &&& {
    width: 100%;
  }
`

export default connect(
  mapStateToProps,
  { postEvent, errorNotification, successNotification }
)(EventsForm);
