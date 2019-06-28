import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateProfile, getMe, getMyEvents, deleteEvent } from '../../actions/HomeAction'
import moment from 'moment';

import Profile from '../ProfileComponent/edit'
import Navigation from '../NavComponent/Navigation'
import Footer from '../FooterComponent/Footer'
import './Home.scss'
import { Dimmer, Loader, Modal, Button, Card, Grid } from 'semantic-ui-react'

class Home extends React.Component {
    render () {
        if (this.props.mountComplete === false) {
            return (
                <>
                <Navigation />
                <div className='home-container'>
                    <div className='home-header'>
                        <h1>Welcome</h1>
                    </div>
                <Dimmer active inverted>
                    <Loader>Loading</Loader>
                </Dimmer>
                </div>
                <Footer />
                </>
            )
        } else {

        // console.log(this.props.user)
        // const [ userevents ] = this.props.user.userevents
        console.log(this.props.user.userEvents)
        return(
            <>
            <Navigation />
                <div className='home-container'>
                    <div className='home-header'>
                        <h1>Welcome, {this.props.user.username}</h1>
                    </div>
                    <div className='home-upper'>
                        <div className='home-profile'>
                            <h3>Username: </h3> <p>{this.props.user.username}</p>
                            <h3>Email: </h3> <p>{this.props.user.email}</p>
                            <h3>Company: </h3> <p>{this.props.user.companyname}</p>
                            <h3>Role: </h3> <p>{this.props.user.role}</p>
                            <Modal trigger={<Button>Edit Profile</Button>}>
                                <Modal.Content>
                                    <Profile />
                                </Modal.Content>
                            </Modal>
                        </div>
                        <div className='home-tasks'>
                            <div className='home-tasks-header'><h2>Upcoming Tasks</h2></div>
                            <div className='home-task-list'>
                                {/* {this.props.user.userEvents} */}
                            </div>
                        </div>
                    </div>
                    <div className='home-lower'>
                        <div className='home-lowerheader'>
                            <h2>My Events</h2>
                        </div>
                        <div className='home-events'>
                            {this.props.user.userEvents.map(event => (
                                console.log('map of home page events', event),
                                <Card link className='event-card' color='#082A47' >
                                    <Card.Content className='event-title' header={event.event.name} color='white' />
                                    <Card.Content>
                                        <p> Company: {event.event.companyname}</p>
                                        <p>Date:{event.event.date})</p>
                                        <p>Budget: {event.event.budget}</p>
                                    </Card.Content>
                                    <Grid columns={2}>
                                        <Grid.Row>
                                            <Grid.Column >

                                                <Link to={`/events/${event.event.eventid}`}>
                                                    <Button className="link">View Now</Button>
                                                </Link>
                                            </Grid.Column>
                                            <Grid.Column textAlign="right">
                                                <Button negative onClick={() => this.props.deleteEvent(event.event)}>Delete</Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            <Footer />
            </>
        )}
    }

    componentDidMount(){
        this.props.getMe()
    }

} 

const mapStateToProps = (state) => {
    return {
        user: state.homeReducer.user,
        mountComplete: state.homeReducer.mountComplete
    }
}

export default connect(mapStateToProps, { getMe, updateProfile, getMyEvents, deleteEvent })(Home);