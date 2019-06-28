import React from 'react';
import { connect } from 'react-router-dom';

import './EventPage.scss'
// import { Accordion } from 'semantic-ui-react'
import { Table, Checkbox } from 'semantic-ui-react';

class Tasks extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activeIndex: 0,
            column: null,
            direction: null,
            open: false,
        }
    }

    render() {
        // console.log('task render cl', this.props.eventID);
        const { column, data, direction } = this.state
        return(
            <>
            <div className='task-list'>
                <Table celled>
                    <Table.Body>
                {this.props.tasks.map(task =>
                    <>
                    <Table.Row>
                        <Table.Cell size='small'>
                        <Checkbox slider />
                        </Table.Cell>
                        <Table.Cell>{task.description}</Table.Cell>
                        <Table.Cell>{task.assigned}</Table.Cell>
                        <Table.Cell>{task.duedate}</Table.Cell>
                        <Table.Cell>$$$</Table.Cell>
                    </Table.Row>
                    {task.purchase.map(purchase => (
                        <Table.Row>
                            <Table.Cell> </Table.Cell>
                            <Table.Cell>{purchase.description}</Table.Cell>
                            <Table.Cell>{purchase.vendorname}</Table.Cell>
                            <Table.Cell>{purchase.price}</Table.Cell>
                            <Table.Cell>{purchase.qty}</Table.Cell>
                        </Table.Row>
                    ))}
                    </>
                )}
                </Table.Body>
            </Table>
            </div>
            </>
        )
    }



    // purchaseClick = (titleProps) => {
    //     const { index } = titleProps
    //     const { activeIndex } = this.state.activeIndex
    //     const newIndex = activeIndex === index ? -1 : index
    //     this.setState({
    //         activeIndex: newIndex
    //     })
    // }

    // handleSort = (clickedColumn) => () => {
    //     const { column, data, direction } = this.state
    
    //     if (column !== clickedColumn) {
    //       this.setState({
    //         column: clickedColumn,
    //         data: _.sortBy(data, [clickedColumn]),
    //         direction: 'ascending',
    //       })
    
    //       return
    //     }
    
    //     this.setState({
    //       data: data.reverse(),
    //       direction: direction === 'ascending' ? 'descending' : 'ascending',
    //     })
    //   }
}

export default Tasks