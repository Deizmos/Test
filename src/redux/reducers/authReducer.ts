import {AuthActionTypes} from "../../types/AuthTypes";

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.email,
            };
        case 'LOGIN_FAIL':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
