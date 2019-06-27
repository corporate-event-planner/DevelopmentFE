import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../NavComponent/Navigation';
import Footer from '../FooterComponent/Footer';
import Tasks from './Tasks'
import './EventPage.scss'
import { getOneEvent, dummyData } from '../../actions/EventAction'

class EventPage extends React.Component {
    state = {
        search: '',
        tasklist: [
            {
                "taskid": 5,
                "name": "Reservations",
                "description": "Make Hotel Reservations",
                "assigned": "John",
                "completed": false,
                "duedate": "8-1-2019",
                "category": "Service",
                "purchase": []
                },
                {
                "taskid": 6,
                "name": "RSVP",
                "description": "Have all employees either RSVP or opt out",
                "assigned": "Michelle",
                "completed": false,
                "duedate": "7-15-2019",
                "category": "Task",
                "purchase": []
                }
        ]
    }

    render() {
        if (this.props.mountComplete === false){
            return <h1>Loading</h1>
        } else {
            console.log('Event Render', this.props.event.tasklist)
            // all incorrect filter 'includes'
            const teamOrgTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Service'));
    
            const promotionTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Promtion'));
    
            const productionTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Production'));
    
            const marketDevTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Market Development'));
    
            const setupTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Set-up'));
    
            const otherTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Other'));
    
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
                        <div className='tasklist-container'>
                            <div className='tasklist-category'>
                                <h3>Graphic Design</h3>
                            </div>
                            <Tasks tasks={teamOrgTasks} />
                        </div>
                    </div>
                </div>
            <Footer />
            </>
            )
        }
    }
    
    componentDidMount () {
        const { eventid } = this.props.match.params;
        this.props.getOneEvent(eventid);
        this.props.dummyData(eventid)
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.eventReducer.event,
        mountComplete: state.eventReducer.mountComplete,
    }
}

export default connect(mapStateToProps, { getOneEvent, dummyData })(EventPage);