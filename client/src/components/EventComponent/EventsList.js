import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../NavComponent/Navigation';
import Footer from '../FooterComponent/Footer';
import './EventsList.scss';
import { Form, Button, Card } from "semantic-ui-react";
import { getEvents, searchEvents } from '../../actions/EventsAction'


class EventsList extends React.Component {
    state = {
        search: ''
    }

    render() {
        return (
            <>
            <Navigation />
            <div className='events-container'>
                <div className='events-header'>
                    <h1>All Events</h1>
                    <div className='search-bar'>
                        <Form.Input 
                        icon='search'
                        size='large'
                        placeholder='Find events'
                        value={this.state.search}
                        onChange={this.handleChanges}
                        />
                        <Button
                            size='large'
                            loading={this.props.isSearching ? true : false}
                            >Search</Button>
                    </div>
                </div>
                <div className='events-list'>
                    {this.props.events.map(event => (
                        <Card className='event-card' color='#082A47' >
                            <Card.Content className='event-title' header={event.name} />
                            <Card.Content>
                                <p> Company: {event.companyname}</p>
                                <p>Date: {event.date}</p>
                                <p>Budget: {event.budget}</p>
                            </Card.Content>
                            <Button fluid color='#632A50'>View Now</Button>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
            </>
        )
    }

    componentDidMount() {
        this.props.getEvents();
    }

    handleChanges = (event) => {
    this.setState({ [event.target.name]: event.target.value})
    }

}

const mapStateToProps = (state) => {
    return {
        events: state.eventsReducer.events,
        isSearching: state.eventsReducer.isSearching
    }
}

export default connect(mapStateToProps, { getEvents, searchEvents })(EventsList)