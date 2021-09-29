import actions from './actions';
import {getUsers} from './../../../api/usersApi';

const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams));
            return getUsers(requestParams)
                .then(result=>{
                    dispatch(actions.fetchUsersSuccess(result));
                    return result;
                })
                .catch(err=>{
                    dispatch(actions.fetchUsersFail(err));
                    return err;
                })
    }
}

export default {
    fetchUsers
}