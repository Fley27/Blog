import {
    NEW_POST_FAIL,
    NEW_POST_REQUEST,
    NEW_POST_SUCCESS,
} from "../consts.js";

const initialState = {
    loading: false,
    article: null,
}

export default function reducer ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case NEW_POST_REQUEST:
            return {
                ...state, 
                loading: true,
                article: null,
            }
        case NEW_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                article: payload,
            }
        case NEW_POST_FAIL:
            return {
                ...state,
                loading: false,
                article: null,
            }
        default: {
            return state
        }
    }
}