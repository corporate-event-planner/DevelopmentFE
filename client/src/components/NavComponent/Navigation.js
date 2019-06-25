import React from "react";
import { Link } from 'react-router-dom';

import './Navigation.scss'

const Navigation = ( ) => {
    return(
        <div className='navigation-container'>
            <div className='navigation-bar'>
                <div className='title'><h1>Corporate Event Planner</h1></div>
                <div className='nav-items'>
                    <Link to='/' >Home</Link>
                    <Link to='/events'>Events</Link>
                    <Link to='/createevent'>Create Event</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;