import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../NavComponent/Navigation';
import Footer from '../FooterComponent/Footer';
import './EventPage.scss'
import { getOneEvent } from '../../actions/EventAction'

class EventPage extends React.Component {
    state = {
        search: ''
    }

    render() {
        return(
            <>
            <Navigation />
            <h1>event page</h1>
            <Footer />
            </>
        )
    }

    componentDidMount() {
        this.props.getOneEvent();
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.eventsReducer.event,
    }
}

export default connect(mapStateToProps, { getOneEvent })(EventPage);