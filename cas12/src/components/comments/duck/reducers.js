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

        default: return state;
    }
}