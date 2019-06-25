import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../NavComponent/Navigation'
import Footer from '../FooterComponent/Footer'
import { Form, Button } from "semantic-ui-react";


class EventsList extends React.Component {
    state = {
        search: ''
    }

    render() {
        return (
            <>
            <Navigation />
            <div className='events-container'>
                <div className='events-header'><h1>All Events</h1></div>
                <div className='search-bar'>
                    <Form.Input 
                    icon='search'
                    size='large'
                    placeholder='...search'
                    value={this.state.search}
                    onChange={this.handleChanges}
                    />
                    <Button
                        size='large'
                        loading={this.props.isSearching ? true : false}
                        >Search</Button>
                </div>
                <div className=''></div>
            </div>
            <div className=''></div>
            <Footer />
            </>
        )
    }

    handleChanges = (event) => {
    this.setState({ [event.target.name]: event.target.value})
    }
}

export default EventsList