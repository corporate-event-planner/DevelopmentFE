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
                <div className='event-container'>
                    <div className='event-header'>
                        <h1>{this.props.event.name}</h1>
                    </div>
                    <div className='event-upper'>
                        <div className='events-general'>
                            <h4>Company: </h4> <span>{this.props.event.companyname}</span>
                            <h4>Date: </h4> <span>{this.props.event.date}</span>
                            <h4>Budget: </h4> <span>{this.props.event.budget}</span>
                            {/* ADD BUDGET % HERE */}
                        </div>
                        <div className='events-description'>
                            <h4>Description: </h4>
                            <p>{this.props.event.description}</p>
                        </div>
                    </div>
                    <div className='event-tasks'>
                        {this.props.event.tasklist.map(list => (
                            <div className='tasklist-container'>
                                
                                <div className='tasklist-category'>
                                    <h3>Graphic Design</h3>
                                </div>
                                <div className='tasks'>
                                
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            <Footer />
            </>
        )
    }

    componentDidMount() {
        this.props.getOneEvent(this.props.eventid);
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.eventsReducer.event,
    }
}

export default connect(mapStateToProps, { getOneEvent })(EventPage);