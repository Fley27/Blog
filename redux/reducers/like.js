import {
    LIKE_FAIL,
    LIKE_REQUEST,
    LIKE_SUCCESS,
    ISLIKE_FAIL,
    ISLIKE_REQUEST,
    ISLIKE_SUCCESS,
} from "../consts.js";

const initialState = {
    loading: false,
    isLike: false, 
    likes: 0,
}

export default function reducer ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ISLIKE_REQUEST:
        case LIKE_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case LIKE_SUCCESS:
        case ISLIKE_SUCCESS:
            const {numberOfLike, isLiked} = payload;
            console.log(payload);
            return {
                ...state,
                loading: false,
                isLike: isLiked,
                likes: numberOfLike, 
            }
        case LIKE_FAIL:
        case ISLIKE_FAIL:
            return {
                ...state,
                loading: false,
                isLike: null,
            }
        default: {
            return state
        }
    }
}