import {
    EVENT_UPDATE_START,
    EVENT_UPDATE_SUCCESS
} from '../actions/EventModifyAction'

const initialState = {
    event: [],
    placingData: false,
    errors: '',
}

export const eventModifyReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case EVENT_UPDATE_START:
            return {
                ...state,
                error: '',
                placingData: true,
            }
        case EVENT_UPDATE_SUCCESS:
            return {
                ...state,
                error: '',
                placingData: false,
                user: action.payload
            }
        default:
            return state;
    }
} 