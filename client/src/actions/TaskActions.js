import axiosWithAuth from './AxiosWithAuth'

export const ADD_TASK_START = 'ADD_TASK_START'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'

export const addNewTask = (eventid, task) => dispatch => {
    const drilledTask = {
        'tasklist': [
            {
                'description': task.description,
                'assigned': task.assigned,
                'duedate': task.duedate,
                'category': task.category,
                'purchase': [
                    {
                        'description': task.purchaseDescription,
                        'vendorname': task.vendorname,
                        'price': task.price,
                        'qty': task.qty,
                    }
                ]

            }
        ]
    }

    dispatch ({ type: ADD_TASK_START })
    axiosWithAuth()
        .put(`https://corporate-event-planner.herokuapp.com/events/${eventid}`, drilledTask)
        .then(event=> {
            dispatch({ type: ADD_TASK_SUCCESS, payload: event.data})
        })
        .catch(error => {
            console.log('catch error', error.response)
        })
}