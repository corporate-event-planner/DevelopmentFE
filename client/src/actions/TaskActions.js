import axiosWithAuth from './AxiosWithAuth'

export const ADD_TASK_START = 'ADD_TASK_START'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'

export const addNewTask = (eventid, task) => dispatch => {
    const drilledTask = 

    dispatch ({ type: ADD_TASK_START })
    axiosWithAuth()
        .put(`https://corporate-event-planner.herokuapp.com/events/${eventid}`, task)
        .then(event=> {
            dispatch({ type: ADD_TASK_SUCCESS, payload: event.data})
        })
}