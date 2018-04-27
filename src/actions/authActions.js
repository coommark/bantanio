import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';
import setAuthorizationHeader from '../utils/setAuthorizationHeader';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const register = (data) => dispatch =>
    api.auth.register(data).then(user => {
        localStorage.shopJWT = user.token;
        setAuthorizationHeader(user.token);
        dispatch(userLoggedIn(user));
});

export const login = (credentials) => dispatch =>
    api.auth.login(credentials).then(user => {
        localStorage.shopJWT = user.token;
        setAuthorizationHeader(user.token);
        dispatch(userLoggedIn(user));
});

export const logout = () => dispatch => {
        localStorage.removeItem("shopJWT");
        setAuthorizationHeader();
        dispatch(userLoggedOut());
};

export const forgotPasswordRequest = (email) => () =>
    api.auth.forgotPasswordRequest(email);
