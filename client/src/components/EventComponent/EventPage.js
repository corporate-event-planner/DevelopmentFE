import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../NavComponent/Navigation';
import Footer from '../FooterComponent/Footer';
import Tasks from './Tasks'
import TaskModal from './TaskModal'
import './EventPage.scss'
import { Form, Button, Icon, Modal, Grid, Dimmer, Loader, Dropdown } from 'semantic-ui-react'
import { getOneEvent, addNewUser } from '../../actions/EventAction'

class EventPage extends React.Component {
    state = {
        search: '',
        username: '',
        eventID: null,
    }

    render() {
        if (this.props.mountComplete === false) {
            return (
                <Dimmer active inverted>
                    <Loader>Loading</Loader>
                </Dimmer>
            )
        } else {
            const teamOrgTasks = this.props.event.tasklist.filter(task =>
                task.category.includes('Graphic Design'));

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

            return (
                <div>
                    <Navigation />
                    <div className='event-container'>
                        <div className='event-header'>
                            <h1>{this.props.event.name}</h1>
                        </div>
                        <Grid columns="two">
                            <Grid.Row>
                                <Grid.Column>
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
                                </Grid.Column>

                                <Grid.Column>
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
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>



                        <div className='event-tasks'>
                            <div className='tasklist-container'>
                                <Button icon labelPosition='left' primary size='small' onClick={this.show('small')}>
                                    <Icon name='check' /> Add Task
                                </Button>
                                <Modal size={'small'} open={this.state.open} onClose={this.close}>
                                    <Modal.Header>New Task</Modal.Header>
                                    <Modal.Content>
                                        <TaskModal eventID={this.props.match.params} />
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button negative onClick={this.close}>Cancel</Button>
                                    </Modal.Actions>
                                </Modal>
                                <div className='tasklist-category'>
                                    <h3>Graphic Design</h3>
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
        // console.log( {eventid} )
        // this.setState({ eventID })
        this.props.getOneEvent(eventid);
        // console.log('CDM', this.state.eventID)
        // console.log('props log', this.props.match.params)
    }

    handleChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value })
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
}

const mapStateToProps = (state) => {
    return {
        event: state.eventReducer.event,
        mountComplete: state.eventReducer.mountComplete,
    }
}

export default connect(mapStateToProps, { getOneEvent, addNewUser })(EventPage);