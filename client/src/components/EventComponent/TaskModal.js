import React from 'react';
import _ from 'lodash';
import { Dropdown, Form, Radio, TextArea } from 'semantic-ui-react';
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
                <Form>
                <h4>Category: </h4>
                <Dropdown 
                    name={this.state.category}
                    placeholder='category' 
                    value={categoryOptions.text}
                    selection 
                    options={categoryOptions} 
                    onChange={(event) => this.changeHandler(event.target.textContent)}/>
                <Form.Field 
                    label='Description'
                    control={TextArea}
                    name='description' />
                <Form.Group>
                    <label>Assigned</label>
                </Form.Group>
                    <Form.Field
                        control={Radio}
                        />
                {/* <Dropdown 
                    name={this.state.category}
                    placeholder='category' 
                    value={categoryOptions.text}
                    selection 
                    options={categoryOptions} 
                    onChange={(event) => this.changeHandler(event.target.textContent)}/> */}
                <h4>Due Date: </h4>
                </Form>
            </div>
        )
    }

    changeHandler = (event) => {
        this.setState({category: event})
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

