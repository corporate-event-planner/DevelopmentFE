import React from 'react';
import _ from 'lodash';
import { Dropdown, Form, Radio, TextArea, Input, Label, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';

import "react-datepicker/dist/react-datepicker.css";
import { addNewTask } from '../../actions/TaskActions'

class TaskModal extends React.Component {
    state = {
        event: '',
        descripton: '',
        assigned: '',
        duedate: new Date(),
        category: '',
        purchaseDescription: '',
        price: '',
        qty: '',

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
                    onChange={(event) => this.changeCategory(event.target.textContent)}/>

                <Form.Field 
                    label='Description'
                    control={TextArea}
                    name='description' 
                    value={this.state.description} />

                <Form.Group>
                    <label>Assigned</label>
                </Form.Group>
                
                    <Form.Field
                        control={Radio}
                        />
                {/* <Dropdown 
                    name={this.state.category}
                    placeholder='cat' 
                    value={categoryOptions.text}
                    selection 
                    options={categoryOptions} 
                    onChange={(event) => this.changeHandler(event.target.textContent)}/> */}

                <DatePicker
                    selected={this.state.duedate}
                    onChange={this.handleDate} />
                
                <h4>Purchase</h4>
                <Form.Field
                    label='Purchase Description'
                    name='purchaseDescription'
                    control={Input}
                    value={this.state.purchaseDescription}
                    onChange={this.changeHandler} />

                <Form.Field
                    label='Vendor Name'
                    name='vendorname'
                    control={Input}
                    value={this.state.description}
                    onChange={this.changeHandler} />

                <Form.Field>
                <label>Price</label>
                <Input type="text" placeholder="Amount">
                    <Label basic>$</Label>
                    <input
                    name="price"
                    onChange={this.changeHandler}
                    value={this.state.price}
                    />
                    <Label>.00</Label>
                </Input>
                </Form.Field>

                <Form.Field 
                    label='Quantity'
                    name='quantity'
                    control={Input}
                    value={this.state.quanity}
                    onChange={this.changeHandler} />
                </Form>
                <Button 
                positive 
                icon='checkmark' 
                labelPosition='right' 
                content='Add New Task' 
                onClick={this.addNewTask} />
            </div>
        )
    }

    changeCategory = (event) => {
        this.setState({category: event})
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleDate = (date) => {
        this.setState({
          duedate: date
        });
      }

    addNewTask = () => {
        this.props.addNewTask(this.props.eventid, this.state.task)
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

export default connect(mapStateToProps, { addNewTask })(TaskModal);

