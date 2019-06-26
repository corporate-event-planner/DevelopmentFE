import axiosWithAuth from './AxiosWithAuth'

export const FETCH_ONEEVENT_START = 'FETCH_ONEEVENT_START';
export const FETCH_ONEEVENT_SUCCESS = 'FETCH_ONEEVENT_SUCCESS';
export const FETCH_ONEEVENT_FAILURE = 'FETCH_ONEEVENT_FAILURE';

export const getOneEvent = (eventid) => dispatch => {
    dispatch({ type: FETCH_ONEEVENT_START })
    axiosWithAuth()
        .get(`https://corporate-event-planner.herokuapp.com/events/${eventid}`)
        .then(response => response.json() )
        .then(event => {
            console.log(event)
            dispatch({ type: FETCH_ONEEVENT_SUCCESS, payload: event })
        })
}