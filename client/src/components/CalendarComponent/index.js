import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";
import ModalModalExample from "./Modal";
import { connect } from "react-redux";
import { Notify } from "react-redux-notify";
import { getEvents } from "../../actions/EventsAction";
import { Card, Button } from "semantic-ui-react";

const localizer = momentLocalizer(moment);

let components = {
  // eventWrapper: Card // used by each view (Month, Day, Week),
  // dateCellWrapper: Card
  // toolbar: Button
};

class CalendarEvents extends React.Component {
  state = {
    modal: false,
    event: {
      eventStarts: "",
      eventEnds: "",
      title: ""
    }
  };

  componentDidMount() {
    this.props.getEvents();
  }

  closeModal = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        modal: false
      });
      resolve();
    });
  };

  render() {
    return (
      <div>
        <Notify />
        <Calendar
          localizer={localizer}
          events={this.props.events.map((event, index) => ({
            id: index,
            title: event.name,
            allDay: false,
            start: new Date(event.date.split("|")[0]),
            end: new Date(event.date.split("|")[1])
          }))}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={e => {
            this.setState({
              modal: true,
              event: {
                eventStarts: e.start,
                eventEnds: e.end
              }
            });
          }}
          selectable
          defaultView="week"
          onDoubleClickEvent={(event, e) => console.log(event, e)}
          components={components}
        />
        <ModalModalExample
          modal={this.state.modal}
          onClose={this.closeModal}
          eventStarts={`${this.state.event.eventStarts.toLocaleString()}`}
          eventEnds={`${this.state.event.eventEnds.toLocaleString()}`}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.eventsReducer.events
});

export default connect(
  mapStateToProps,
  { getEvents }
)(CalendarEvents);
