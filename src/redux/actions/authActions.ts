import { Dispatch } from 'redux';
import {AuthActionTypes} from "../../types/AuthTypes";
import {LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS} from "../../constatnts/constants";

export const loginUser = (email: string, password: string) => {
    return (dispatch: Dispatch<AuthActionTypes>) => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            localStorage.setItem('isAuthenticated', JSON.stringify(true));
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { email }
            });
        }
    };
};

export const registerUser = (email: string, password: string) => {
    return (dispatch: Dispatch<AuthActionTypes>) => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('isAuthenticated', 'true');

        dispatch({
            type: REGISTER_SUCCESS,
            payload: { email }
        });
    };
};

export const logoutUser = () => {
    return (dispatch: Dispatch<AuthActionTypes>) => {
        localStorage.setItem('isAuthenticated', JSON.stringify(false));

        dispatch({
            type: LOGOUT
        });
    };
};
