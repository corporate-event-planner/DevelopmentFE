export const FETCH_ONEEVENT_START = 'FETCH_ONEEVENT_START';
export const FETCH_ONEEVENT_SUCCESS = 'FETCH_ONEEVENT_SUCCESS';
export const FETCH_ONEEVENT_FAILURE = 'FETCH_ONEEVENT_FAILURE';

const key = '9ed169d0'
const headers = { "X-API-Key": key }

export const getOneEvent = () => dispatch => {
    dispatch({ type: FETCH_ONEEVENT_START })
    fetch('https://my.api.mockaroo.com/events/:id.json', {headers})
        .then(response => response.json() )
        .then(event => {
            console.log(event)
            dispatch({ type: FETCH_ONEEVENT_SUCCESS, payload: event })
        })
}