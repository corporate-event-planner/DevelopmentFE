import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";
import ModalModalExample from "./Modal";

const localizer = momentLocalizer(moment);

export default class CalendarEvents extends React.Component {

  state = {
    modal: false,
    eventStarts: "",
    eventEnds: ""
  }

  handleClose = () => {
    this.setState({ modal: false })
  }

  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={(e) => {
            this.setState({ modal: true, eventStarts: e.start, eventEnds: e.end });
          }}
          selectable
        // view="week"
        />
        <ModalModalExample modal={this.state.modal} onClose={this.handleClose}
          eventStarts={`${moment(this.state.eventStarts.toLocaleString()).format('MMMM Do, h:mm a')}`} eventEnds={`${moment(this.state.eventEnds.toLocaleString()).format('MMMM Do, h:mm a')}`} />
      </div>
    );
  }
}
