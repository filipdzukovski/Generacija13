import constants from './constants';

const fetchCommentsRequest = (requestParams) => {
    return {
        type: constants.GET_COMMENTS_REQUEST,
        payload: requestParams
    }
}

const fetchCommentsSuccess = (comments) => {
    return {
        type: constants.GET_COMMENTS_SUCCESS,
        payload: comments
    }
}

const fetchCommentsFail = (err) => {
    return {
        type: constants.GET_COMMENTS_FAIL,
        payload: err
    }
}

const deleteCommentsRequest = (requestParams) => {
    return {
        type: constants.DELETE_COMMENTS_REQUEST,
        payload: requestParams
    }
}

const deleteCommentsSuccess = (commentId) => {
    return {
        type: constants.DELETE_COMMENTS_SUCCESS,
        payload: commentId
    }
}

const deleteCommentsFail = (error) => {
    return {
        type: constants.DELETE_COMMENTS_FAIL,
        payload: error
    }
}

const editCommentsRequest = (requestParams) => {
    return {
        type: constants.EDIT_COMMENTS_REQUEST,
        payload: requestParams
    }
}

const editCommentsSuccess = (comment) => {
    return {
        type: constants.EDIT_COMMENTS_SUCCESS,
        payload: comment
    }
}

const editCommentsFail = (err) => {
    return {
        type: constants.EDIT_COMMENTS_FAIL,
        payload: err
    }
}

export default {
    fetchCommentsRequest,
    fetchCommentsFail,
    fetchCommentsSuccess,
    deleteCommentsFail,
    deleteCommentsRequest,
    deleteCommentsSuccess,
    editCommentsSuccess,
    editCommentsRequest,
    editCommentsFail
}