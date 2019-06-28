import axiosWithAuth from './AxiosWithAuth'

export const EVENT_UPDATE_START = 'EVENT_UPDATE_START'
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'

export const getEvent = (eventid) => dispatch => {
    return axiosWithAuth().get(`https://corporate-event-planner.herokuapp.com/events/edit/${eventid}`).then(res => {
        return res.data;
    }).catch(err => {
        return false;
    })
} 

export const updateEvent = (eventid, info) => dispatch => {
    const drilledInfo = {
        'eventid': eventid,
        'name': info.name,
        'companyname': info.companyname,
        'budget': info.budget,
        'description': info.description
    }
        console.log(drilledInfo)

    dispatch({ type: EVENT_UPDATE_START })
    axiosWithAuth()
        .put(`https://corporate-event-planner.herokuapp.com/events/edit/${eventid}`, drilledInfo)
        .then(event => {
            dispatch({ type: EVENT_UPDATE_SUCCESS, payload: event.data })
        })
        .catch(error => {
            console.log('catch error', error.response)
        })
}