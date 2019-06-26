import {
    FETCH_ONEEVENT_START,
    FETCH_ONEEVENT_SUCCESS,
    FETCH_ONEEVENT_FAILURE, 
} from '../actions/EventAction'

const initialState = {
    events: [],
    isSearching: false,
    errors: '',
}

export const eventReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_ONEEVENT_START:
            return {
                ...state,
                error: '',
                isSearching: true
            }
        case FETCH_ONEEVENT_SUCCESS:
            return {
                ...state,
                error: '',
                isSearching: false,
                event: action.payload
            }
        case FETCH_ONEEVENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isSearching: false
            }
        default:
            return state;
    }
}