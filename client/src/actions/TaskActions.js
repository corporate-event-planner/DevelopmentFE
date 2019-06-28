import axiosWithAuth from './AxiosWithAuth'

export const ADD_TASK_START = 'ADD_TASK_START'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'

export const TOGGLE_TASK_COMPLETE = 'TOGGLE_TASK_COMPLETE'

export const addNewTask = (eventid, task) => dispatch => {
    const drilledTask = {
        'tasklist': [
            {
                'name': task.name,
                'assigned': task.assigned,
                'duedate': task.duedate,
                'category': task.category,
                'purchase': [
                    {
                        'description': task.purchaseDescription,
                        'vendorname': task.vendorname,
                        'price': task.price,
                        'qty': task.qty
                    }
                ]

            }
        ]
    }
    
    console.log(task)
    dispatch ({ type: ADD_TASK_START })
    axiosWithAuth()
        .put(`https://corporate-event-planner.herokuapp.com/events/edit/${eventid}`, drilledTask)
        .then(event=> {
            dispatch({ type: ADD_TASK_SUCCESS, payload: event.data})
        })
        .catch(error => {
            console.log('catch error', error.response)
        })
}

export const toggleComplete = (eventid, taskid) => dispatch => {
    dispatch ({ type: TOGGLE_TASK_COMPLETE })
    axiosWithAuth()
        .put(`https://corporate-event-planner.herokuapp.com/events/edit/${eventid}`, )
}