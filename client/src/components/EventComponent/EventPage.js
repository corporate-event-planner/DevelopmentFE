import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../NavComponent/Navigation';
import Footer from '../FooterComponent/Footer';

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
}

export default EventPage;