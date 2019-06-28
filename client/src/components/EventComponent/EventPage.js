import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../NavComponent/Navigation';
import Footer from '../FooterComponent/Footer';
import Tasks from './Tasks'
import TaskModal from './TaskModal'
import './EventPage.scss'
import { Form, Button, Icon, Modal, Dimmer, Loader, Dropdown } from 'semantic-ui-react'
import { getOneEvent, addNewUser } from '../../actions/EventAction'

class EventPage extends React.Component {
    state = {
        search: '',
        username: '',
        id: '',
    }

    render() {
        if (this.props.mountComplete === false) {
            return (
                <Dimmer active inverted>
                    <Loader>Loading</Loader>
                </Dimmer>
            )
        } else {
            const organizationTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Organization'));

            const promotionTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Promotion'));

            const productionTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Production'));

            const marketDevTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Market Development'));

            const setupTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Set-up'));

            const otherTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Other'));
                
            const { eventid } = this.props.match.params
            

            return (
                <div>
                    <Navigation />
                    <div className='event-container'>
                        <div className='event-header'>
                            <div className='title'><h1>{this.props.event.name}</h1></div>
                            <div className='mod-buttons'><i class="far fa-edit fa-2x"></i> &nbsp; &nbsp; &nbsp; &nbsp;<i class="far fa-trash-alt fa-2x"></i></div>
                        </div>
                        <div className='event-upper'>
                            <div className='events-general'>
                                <div className='events-generalhead'>
                                    <h3>Info</h3>
                                </div>
                                <h4>Company: </h4> <p>{this.props.event.companyname}</p>
                                <h4>Date: </h4> <p>{this.props.event.date}</p>
                                <h4>Budget: </h4> <p>{this.props.event.budget}</p>
                                {/* ADD BUDGET % HERE */}
                            </div>
                            <div className='events-description'>
                                <div className='events-descriptionheader'>
                                    <h4>Description: </h4>
                                </div>
                                <p>{this.props.event.description}</p>
                            </div>
                        </div>
                        <div className='event-lower'>
                            <div className='event-users'>
                                <div className='event-users-header'>
                                    <h3>Users</h3>
                                    <Form.Input
                                        icon='search'
                                        size='small'
                                        name='username'
                                        placeholder='Add by username'
                                        value={this.state.username}
                                        onChange={this.handleChanges}
                                    /><Button onClick={(event) => this.addUser(event, eventid)}>Add User</Button>
                                </div>
                                <div className='event-users-list'>
                                    {this.props.event.userList.map(user => (
                                        <div className='event-user'>
                                            <span>{user.user.username}</span>
                                        </div>
                                    ))}
                                </div>
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
                                        <TaskModal eventID={eventid} />
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <button negative onClick={this.close}>Cancel</button>
                                    </Modal.Actions>
                                </Modal>
                                <div className='tasklist-category'>
                                    <h3>Organization</h3>
                                    <Tasks tasks={organizationTasks} />
                                </div>
                                <div className='tasklist-category'>
                                    <h3>Promotion</h3>
                                    <Tasks tasks={promotionTasks} />
                                </div>
                                <div className='tasklist-category'>
                                    <h3>Production</h3>
                                    <Tasks tasks={productionTasks} />
                                </div>
                                <div className='tasklist-category'>
                                    <h3>Market Development</h3>
                                    <Tasks tasks={marketDevTasks} />
                                </div>
                                <div className='tasklist-category'>
                                    <h3>Set-up</h3>
                                    <Tasks tasks={setupTasks} />
                                </div>
                                <div className='tasklist-category'>
                                    <h3>Other</h3>
                                    <Tasks tasks={otherTasks} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
    
    componentDidMount() {
        const { eventid } = this.props.match.params;
        this.props.getOneEvent(eventid);
    }

    handleChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addUser = (event, eventid) => {
        event.preventDefault();
        this.props.addNewUser(eventid, this.state.username).then(() => this.props.getOneEvent(eventid))
        console.log('eventid cl in addUser', eventid)
        // IF THIS DOESN'T WORK. ACTIVATE YOUR TRAP CARD
        // Windows.reload()
        // Location.reload()
    }

    show = size => () => this.setState({ size, open: true });
    close = () => this.setState({ open: false })
}

const mapStateToProps = (state) => {
    return {
        event: state.eventReducer.event,
        mountComplete: state.eventReducer.mountComplete,
        newUser: state.eventReducer.newUser,
    }
}

export default connect(mapStateToProps, { getOneEvent, addNewUser })(EventPage);