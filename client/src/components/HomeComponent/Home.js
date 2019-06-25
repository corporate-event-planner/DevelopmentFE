import React from 'react'

import Navigation from '../NavComponent/Navigation'
import Footer from '../FooterComponent/Footer'
import './Home.scss'

class Home extends React.Component {
    render () {
        return(
            <>
            <Navigation />
                <h1>Home</h1>
            <Footer />
            </>
        )
    }
}

export default Home;