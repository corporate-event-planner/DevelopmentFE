import {
    FETCH_EVENTS_START,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE, 
} from '../actions/EventsAction'

const initialState = {
    events: [],
    isSearching: false,
    errors: '',
}

export const eventsReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_EVENTS_START:
            return {
                ...state,
                error: '',
                isSearching: true
            }
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                error: '',
                isSearching: false,
                events: action.payload
            }
        case FETCH_EVENTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isSearching: false
            }
        default:
            return state;
    }
}