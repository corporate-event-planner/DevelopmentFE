import React from "react";
import { Link } from 'react-router-dom';

import './Footer.scss'

const Footer = ( ) => {
    return(
        <div className='footer-container'>
            <div className='footer-bar'>
                <div className='footer-nav'>
                    <Link to='/' >Home</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/createevent'>Create Event</Link>
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