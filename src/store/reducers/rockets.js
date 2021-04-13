import {
    ROCKET_DATA_FETCHED,
} from "../constants";

function rockets(state = {
    isFetched: false,
    data: null
}, action) {

    switch (action.type) {

        case ROCKET_DATA_FETCHED:
            return {
                ...state,
                isFetched: true,
                data: action.payload
            };

        default: return state;
    }
}

export default rockets;