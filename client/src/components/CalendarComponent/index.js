import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";
import ModalModalExample from "./Modal";

const localizer = momentLocalizer(moment);

export default class CalendarEvents extends React.Component {

  state = {
    modal: false
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
            this.setState({ modal: true });
            console.log(e.start, e.end);
          }}
          selectable
        // view="week"
        />
        <ModalModalExample modal={this.state.modal} onClose={this.handleClose} />
      </div>
    );
  }
}
