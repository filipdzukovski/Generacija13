import actions from './actions';
import { getComments, removeComment, changeComment } from './../../../api/commentsApi';


const fetchComments = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchCommentsRequest(requestParams));
        return getComments(requestParams)
            .then(result => {
                dispatch(actions.fetchCommentsSuccess(result));
                return result;
            })
            .catch(err => {
                dispatch(actions.fetchCommentsFail(err));
                return err;
            })
    }
}

const deleteComment = (requestParams) => {
    return dispatch => {
        dispatch(actions.deleteCommentsRequest(requestParams))
        return removeComment(requestParams)
            .then(result => {
                dispatch(actions.deleteCommentsSuccess(result))
                return result;
            })
            .catch(err => {
                dispatch(actions.deleteCommentsFail(err))
                return err;
            })
    }
}

const editComments = (requestParams) => {
    return dispatch => {
        dispatch(actions.editCommentsRequest(requestParams))
        return changeComment(requestParams)
            .then(result => {
                dispatch(actions.editCommentsSuccess(result));
                return result;
            })
            .catch(err => {
                dispatch(actions.editCommentsFail(err));
                return err;
            })
    }
}

export default {
    fetchComments,
    deleteComment,
    editComments
}