import React from "react";
import { connect } from "react-redux";
import { successNotification } from "../../actions/NotifyAction"
import { Button, Header, Image, Modal } from "semantic-ui-react";
import EventsForm from "../FormComponent";
import moment from "moment";

const ModalModalExample = props => (
  <Modal open={props.modal} onClose={props.onClose} closeIcon>
    <Modal.Header>
      {" "}
      Begins: {`${moment(props.eventStarts).format("MMMM Do, h:mm a")}`} / Ends: {`${moment(props.eventEnds).format("MMMM Do, h:mm a")}`}
    </Modal.Header>
    <Modal.Content image>
      <EventsForm date={`${props.eventStarts} | ${props.eventEnds}`} closeModal={props.onClose} />
    </Modal.Content>
  </Modal>
);

export default connect(null, { successNotification })(ModalModalExample);