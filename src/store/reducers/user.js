import {
    LOGIN_SUCCESS,
    LOGOUT
} from "../constants";

const initialState = {
    isLoggedIn :false,
    user: null,
    isAdmin:false
}

function userManagement(state = initialState, action) {

    switch (action.type) {

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };

        case LOGOUT:
            return {...initialState,isAdmin:false}

        default: return state;
    }
}

export default userManagement;