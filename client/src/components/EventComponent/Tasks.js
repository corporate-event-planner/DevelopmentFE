import React from 'react';
import { connect } from 'react-router-dom';

import './Tasks.scss'
// import { Accordion } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react';

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
        // const { purchases } = this.props.tasks.purchase
        // console.log(purchases)
        // console.log(this.props.tasks)
        // console.log(this.props.tasks.purchase)
        return(
            <div className='task-list'>
                {this.props.tasks.map(task => 
                    <div className='task-item'>
                        <div className='task-complete'>
                            {/* {if ( task.complete === true ) {
                             return (<Checkbox active /> )
                            } else {
                                return ( <Checkbox /> )
                            }} */}
                        </div>
                        <div className='task-name'><p>{task.name}</p></div>
                        <div className='task-assigned'><p>{task.assigned}</p></div>
                        <div className='task-duedate'><p>{task.duedate}</p></div>
                        <div className='task-purchase'><span>$$$</span></div>
                    </div>
                )}
            </div>
        )
    }

    completeClick = (eventid) => {

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


/* Can't access the purchase [ ]
<div className='task-purchases'>
<div className='purchase-item'>
    <div className='purchase-empty'> <span>~~</span></div>
    <div className='purchase-name'>{task.purchase.name}</div>
    <div className='purchase-vendor'>{task.purchase.vendorname}</div>
    <div className='purchase-price'>{task.purchase.price}</div>
    <div className='purchase-qty'>{task.purchase.qty}</div>
</div> 
</div>*/