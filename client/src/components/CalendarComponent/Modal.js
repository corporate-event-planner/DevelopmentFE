import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import EventsForm from "../FormComponent";

const ModalModalExample = props => (
  <Modal open={props.modal} onClose={props.onClose} closeIcon>
    <Modal.Header>
      {" "}
      Begins: {props.eventStarts} / Ends: {props.eventEnds}
    </Modal.Header>
    <Modal.Content image>
      <EventsForm />
    </Modal.Content>
  </Modal>
);

export default ModalModalExample;