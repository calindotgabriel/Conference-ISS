import axios from 'axios';

import setAuthorizationToken from '../utils/setAuthorisationToken';

export function login(data) {
    return dispatch => {
        return axios.post('/api/auth/login', data)
            .then(res => {
                // debugger;
                const token = res.data.token;
                const user = res.data.username;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                // dispatch({ type: SET_CURRENT_USER, user : res.data.username });
                return res;
            });
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
    }
}