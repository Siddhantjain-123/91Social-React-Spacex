import {MISSION_DATA_FETCHED} from "../constants";

function missions(state = {
    isFetched :false,
    data: null
}, action) {

    switch (action.type) {

        case MISSION_DATA_FETCHED:
            return {
                ...state,
                isFetched: true,
                data: action.payload
            };

        default: return state;
    }
}

export default missions;