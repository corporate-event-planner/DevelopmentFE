import React from "react";

import './Navigation.scss'
import EventsList from '../EventComponent/EventsList'

const Navigation = ( ) => {
    return(
        <div className='navigation-container'>
            <div className='navigation-bar'>
                <div className='title'><h1>Corporate Event Planner</h1></div>
                <div className='nav-items'>
                    <Route exact path='/' render={props => <Home {...props} />} />
                    <Route exact path='/events' render={props => <EventsList {...props} />} />
                    <Route exact path='/createevent' render={props => <CreateEvent {...props} />} />
                </div>
            </div>
        </div>
    )
}

export default Navigation;