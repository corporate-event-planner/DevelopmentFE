import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Navigation from '../NavComponent/Navigation';
import Footer from '../FooterComponent/Footer';
import './EventsList.scss';
import { Form, Button, Card } from "semantic-ui-react";
import { getEvents, searchEvents } from '../../actions/EventsAction'


class EventsList extends React.Component {
    state = {
        search: '',
        filteredEvents: [],
        stateEvents: this.props.events
    }

    render() {
        console.log('render',this.state.filteredEvents)
        // if ( this.state.events.length === 0) {
        //     return <h1>loading</h1>
        // }
        return (
            <>
            <Navigation />
            <div className='events-container'>
                <div className='events-header'>
                    <h1>All Events</h1>
                    <div className='search-bar'>
                        <form onSubmit={this.searchEvents}>
                        <Form.Input 
                        icon='search'
                        size='large'
                        name='search'
                        placeholder='Find events'
                        value={this.state.search}
                        onChange={this.handleChanges}
                        onSubmit={this.search}
                        />
                        </form>
                    </div>
                </div>
                <div className='events-list'>
                    {this.state.filteredEvents.length > 0 ? (
                        this.state.filteredEvents.map(event => (
                            <Card link className='event-card' color='#082A47' >
                                <Card.Content className='event-title' header={event.name} color='white' />
                                <Card.Content>
                                    <p> Company: {event.companyname}</p>
                                    <p>Date: {event.date}</p>
                                    <p>Budget: {event.budget}</p>
                                </Card.Content>
                                <Link to={`/events/${event.eventid}`}>
                                    <Button fluid>View Now</Button>
                                </Link>
                            </Card>
                            ))
                        ) : (
                            this.props.events.map(event => (
                                <Card link className='event-card' color='#082A47' >
                                    <Card.Content className='event-title' header={event.name} color='white' />
                                    <Card.Content>
                                        <p> Company: {event.companyname}</p>
                                        <p>Date: {event.date}</p>
                                        <p>Budget: {event.budget}</p>
                                    </Card.Content>
                                    <Link to={`/events/${event.eventid}`}>
                                        <Button fluid>View Now</Button>
                                    </Link>
                                </Card>
                            ))
                        )
                    }
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
    console.log(this.state.search)
    }

    searchEvents = (event) => {
        event.preventDefault();
        const filtered = this.props.events.filter(event => event.name.includes(this.state.search));
        this.setState({
            filteredEvents: filtered,
        })
    }

}

const mapStateToProps = (state) => {
    return {
        events: state.eventsReducer.events,
        isSearching: state.eventsReducer.isSearching
    }
}

export default connect(mapStateToProps, { getEvents, searchEvents })(EventsList)