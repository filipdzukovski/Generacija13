import actions from './actions';
import {getComments} from './../../../api/commentsApi';


const fetchComments = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchCommentsRequest(requestParams));
        return getComments(requestParams)
            .then(result=>{
                dispatch(actions.fetchCommentsSuccess(result));
                return result;
            })
            .catch(err=>{
                dispatch(actions.fetchCommentsFail(err));
                return err;
            })
    }
}

export default {
    fetchComments
}