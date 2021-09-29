import constants from './constants';

const fetchCommentsRequest = (requestParams) => {
    return {
        type:constants.GET_COMMENTS_REQUEST,
        payload:requestParams
    }
}

const fetchCommentsSuccess = (comments) => {
    return {
        type: constants.GET_COMMENTS_SUCCESS,
        payload:comments
    }
}

const fetchCommentsFail = (err) => {
    return{
        type:constants.GET_COMMENTS_FAIL,
        payload:err
    }
}

export default{
    fetchCommentsRequest,
    fetchCommentsFail,
    fetchCommentsSuccess
}