import constants from "./constants";

const initialState = {
    comments: [],
    message: undefined
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case constants.GET_COMMENTS_REQUEST:
            return {
                ...state
            }

        case constants.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload
            }

        case constants.GET_COMMENTS_FAIL:
            return {
                ...state,
                message: action.payload
            }

        case constants.DELETE_COMMENTS_REQUEST:
            return {
                ...state
            }

        case constants.DELETE_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: [...state.comments.filter(comment => comment.id !== action.payload)]
            }

        case constants.DELETE_COMMENTS_FAIL:
            return {
                ...state,
                message: action.payload
            }

        case constants.EDIT_COMMENTS_REQUEST:
            return {
                ...state
            }

        case constants.EDIT_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: [...state.comments.map(comm => comm.id === action.payload.id ? action.payload : comm)]
            }

        case constants.EDIT_COMMENTS_FAIL:
            return {
                ...state,
                message: action.payload
            }

        default: return state;
    }
}