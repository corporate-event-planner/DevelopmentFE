import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";
import ModalModalExample from "./Modal";
import { connect } from "react-redux";
import Navigation from '../NavComponent/Navigation'
import Footer from '../FooterComponent/Footer'

import { Notify } from "react-redux-notify";
const localizer = momentLocalizer(moment);

class CalendarEvents extends React.Component {
  state = {
    modal: false,
    event: {
      eventStarts: "",
      eventEnds: "",
      title: "",
    }
  };


  closeModal = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        modal: false
      })
      resolve();
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <Notify />
        <Calendar
          localizer={localizer}
          events={this.props.events}
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
          defaultView='week'
        />
        <ModalModalExample
          modal={this.state.modal}
          onClose={this.closeModal}
          eventStarts={`${
            this.state.event.eventStarts.toLocaleString()
            }`}
          eventEnds={`${this.state.event.eventEnds.toLocaleString()}`}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.eventsReducer.events
});

export default connect(
  mapStateToProps,
  {}
)(CalendarEvents);
