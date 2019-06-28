import React from 'react'
import { connect } from 'react-redux'
import { updateProfile, getMe } from '../../actions/HomeAction'
import Profile from '../ProfileComponent/edit'

import Navigation from '../NavComponent/Navigation'
import Footer from '../FooterComponent/Footer'
import './Home.scss'
import { Dimmer, Loader, Modal, Button} from 'semantic-ui-react'

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

        console.log(this.props.user)
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

                        </div>
                    </div>
                    <div className='home-lower'>
                        <div className='home-current'>

                        </div>
                        <div className='home-past'>

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

export default connect(mapStateToProps, { getMe, updateProfile })(Home);