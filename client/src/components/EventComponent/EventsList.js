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
    }

    render() {
        console.log('render',this.state.filteredEvents)
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
                    {this.props.events.map(event => (
                       
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
    console.log(this.state.search)
    }

    searchEvents = (event) => {
        event.preventDefault();
        const filtered = this.props.events.filter(event => event.name.includes(this.state.search));
        this.setState({
            ...this.state,
            filteredEvents: filtered,
        }, ()=>console.log('filteredEvents',this.state.filteredEvents))
    }

}

const mapStateToProps = (state) => {
    return {
        events: state.eventsReducer.events,
        isSearching: state.eventsReducer.isSearching
    }
}

/* <Button
    size='large'
    loading={this.props.isSearching ? true : false}
>Search</Button>asd */

        // this.setState(prevState => ({
        //     ...prevState,
        //     searched: filtered,
        //     test: 'this is the test working!'
        // }))

export default connect(mapStateToProps, { getEvents, searchEvents })(EventsList)