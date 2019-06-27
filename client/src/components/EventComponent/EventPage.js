import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Icon, Modal, Dropdown } from 'semantic-ui-react'

import Navigation from '../NavComponent/Navigation';
import Footer from '../FooterComponent/Footer';
import Tasks from './Tasks'
import TaskModal from './TaskModal'
import './EventPage.scss'
import { getOneEvent, addNewUser } from '../../actions/EventAction'

class EventPage extends React.Component {
    state = {
        search: '',
        username: '',
        eventID: {},
    }

    render() {
        if (this.props.mountComplete === false){
            return (
            <h1>Loading</h1>
            )
        } else {
            // console.log('Event Render', this.props.event.tasklist)
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

            // const userOptions = this.props.event.tasklist.userList.user.username.map(user =>
            //     user)
    
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
                    <div className='event-users'>
                        <div className='event-users-header'>
                            <h4>Users</h4>
                            <Form.Input
                            icon='search'
                            size='medium'
                            name='username'
                            placeholder='Add by username'
                            value={this.state.username}
                            onChange={this.handleChanges}
                            /><button onClick={this.addUser}>Add User</button>
                        </div>
                        <div className='event-users-list'>
                        {this.props.event.userList.map(user => (
                            <div className='event-user'>
                                {user.user.username} 
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='event-tasks'>
                        <div className='tasklist-container'>
                            <Button icon labelPosition='left' primary size='small' onClick={this.show('small')}>
                                <Icon name='check' /> Add Task
                            </Button>
                            <Modal size={'small'} open={this.state.open} onClose={this.close}>
                                <Modal.Header>New Task</Modal.Header>
                                <Modal.Content>
                                    <TaskModal />
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button negative onClick={this.close}>Cancel</Button>
                                    <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.addNewTask} />
                                </Modal.Actions>
                            </Modal>
                            <div className='tasklist-category'>
                                <h3>Graphic Design</h3>
                            </div>
                            <Tasks tasks={teamOrgTasks} eventid={this.props.match.params} />
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
        this.setState({ eventID: eventid })
        this.props.getOneEvent(eventid);
        console.log('CDM')
        // this.props.dummyData(eventid)
    }

    handleChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value})
        console.log(this.props.addNewUser)
    }

    addUser = (event) => {
        // console.log('addUser eventid', this.state.eventID)
        // console.log('addUser name', this.state.username)
        event.preventDefault();
        this.props.addNewUser(this.state.eventID, this.state.username)
    }

    show = size => () => this.setState({ size, open: true });
    close = () => this.setState({ open: false })

    addNewTask = () => {
        this.props.addNewTask(this.props.eventid, this.state.task)
    }

    // removeUser (userid) {
    //     this.props.dummyData(eventid)
    // }
    //<button onClick={this.removeUser(user.userid)}>x</button>
}

const mapStateToProps = (state) => {
    return {
        event: state.eventReducer.event,
        mountComplete: state.eventReducer.mountComplete,
    }
}

export default connect(mapStateToProps, { getOneEvent, addNewUser })(EventPage);