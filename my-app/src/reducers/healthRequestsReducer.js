import { healthRequestTypes } from "../actions/types"

const initialState = {
    yourHealthRequests: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_YOUR_HEALTH_REQUESTS:
            return {
                ...state,
                yourHealthRequests: action.payload
            };
        default:
            return state;
    }
}