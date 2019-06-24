import React from "react";

import './Footer.scss'
import Home from '../HomeComponent/Home'
import EventsList from '../EventComponent/EventsList'

const Footer = ( ) => {
    return(
        <div className='footer-container'>
            <div className='footer-bar'>
                <div className='footer-nav'>
                    <Route exact path='/' render={props => <Home {...props} />} />
                    <Route exact path='/events' render={props => <EventsList {...props} />} />
                    <Route exact path='/createevent' render={props => <CreateEvent {...props} />} />
                </div>
                <div className='footer-social'>
                    <a href='#'>Tweeter</a>
                    <a href='#'>Tweeter</a>
                    <a href='#'>Tweeter</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;