import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}
// todo differentiate
export function userLoginRequest(userData) {
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}