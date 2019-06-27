import React from 'react';
import _ from 'lodash';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getOneEvent, addNewUser } from '../../actions/EventAction'

class TaskModal extends React.Component {
    state = {
        event: '',
        descripton: '',
        assigned: '',
        duedate: '',
        category: ''
    }

    render() {
        return(
            <div className='task-form'>
                <h4>Task Description :</h4>
                <h4>Assigned: </h4>
                <h4>Due Date: </h4>
                <h4>Category: </h4>
                <Dropdown 
                name={this.state.category}
                placeholder='category' 
                value={categoryOptions.text}
                selection 
                options={categoryOptions} 
                onChange={(event) => this.changeHandler(event.target.textContent)}/>
            </div>
        )
    }

    changeHandler = (event) => {
        this.setState({category: event})
        console.log(this.state.category)
    }
}

const categoryDefinitions = [
    'Team Organization', 'Promotion', 'Production', 'Market Development', 'Set-up', 'Other'
]

const categoryOptions = _.map(categoryDefinitions, (category, index) => ({
    key: categoryDefinitions[index],
    text: category,
    value: categoryDefinitions[index]
}))

const mapStateToProps = (state) => {
    return {
        event: state.eventReducer.event,
        mountComplete: state.eventReducer.mountComplete,
    }
}

export default connect(mapStateToProps, { getOneEvent, addNewUser })(TaskModal);

