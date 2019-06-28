import {
    ADD_TASK_START,
    ADD_TASK_SUCCESS,
} from '../actions/TaskActions'

const initialState= {
    event: [],
    placingData: false,
    errors: '',
}

export const taskReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case ADD_TASK_START:
            return {
                ...state,
                error: '',
                placingData: true,
            }
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                error: '',
                placingData: false,
                event: action.payload,
            }
        default:
            return state;
    }
}