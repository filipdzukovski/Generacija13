import constants from './constants';

const fetchUsersRequest = (requestParams) => {
    return {
        type: constants.GET_USERS_REQUEST,
        payload:requestParams
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: constants.GET_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFail = (error) => {
    return {
        type: constants.GET_USERS_FAIL,
        payload:error
    }
}

export default {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFail
}