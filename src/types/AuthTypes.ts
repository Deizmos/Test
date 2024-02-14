import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS} from "../constatnts/constants";

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: { email: string };
}

interface LoginFailAction {
    type: typeof LOGIN_FAIL;
    payload: string;
}

interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    payload: { email: string };
}

interface RegisterFailAction {
    type: typeof REGISTER_FAIL;
    payload: string;
}

interface LogoutAction {
    type: typeof LOGOUT;
}

export type AuthActionTypes = LoginSuccessAction | LoginFailAction | RegisterSuccessAction | RegisterFailAction | LogoutAction;
