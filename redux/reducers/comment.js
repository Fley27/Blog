import {
    ADD_COMMENT_FAIL,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    FETCH_COMMENT_FAIL,
    FETCH_COMMENT_REQUEST,
    FETCH_COMMENT_SUCCESS,
    ADD_REPLY_COMMENT_FAIL,
    ADD_REPLY_COMMENT_REQUEST,
    ADD_REPLY_COMMENT_SUCCESS,
} from "../consts.js";

const initialState = {
    loading: false,
    comment: null, 
    comments: [],
    reply: null
}

export default function reducer ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_REPLY_COMMENT_REQUEST:
            return {
                ...state, 
                loading: true,
                reply: null,
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state, 
                loading: true,
                comment: null,
            }
        case FETCH_COMMENT_REQUEST:
            return {
                ...state, 
                loading: true,
                comments: [],
            } 
        case ADD_REPLY_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                reply: payload,
            }
        case FETCH_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: payload,
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comment: payload,
            }
        case ADD_REPLY_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                reply: null,
            }
        case FETCH_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                comments: null,
            }
        case ADD_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                comment: null,
            }
        default: {
            return state
        }
    }
}