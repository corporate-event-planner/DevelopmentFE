import {
    FETCH_ONEEVENT_START,
    FETCH_ONEEVENT_SUCCESS,
    FETCH_ONEEVENT_FAILURE, 
    DUMB_DUMB_FIRE,
    DUMB_DUMB_WIN
} from '../actions/EventAction'

const initialState = {
    event: [],
    isSearching: false,
    errors: '',
    mountComplete: false,
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
                event: action.payload,
                mountComplete: true,
            }
        case FETCH_ONEEVENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isSearching: false
            }
        case DUMB_DUMB_WIN:
            return {
                event: action.payload
            }
        default:
            return state;
    }
}