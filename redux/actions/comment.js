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
    link
} from "../consts.js";
import axios from "axios";
import { setAlert } from "./alert";


export const addReply = (token, data) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }

    dispatch({
        type: ADD_REPLY_COMMENT_REQUEST
    });

    try {
        const res = await axios.post(`${link}/comment/reply`,
            data,
            config
        )
        
        dispatch({
            type: ADD_REPLY_COMMENT_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: ADD_REPLY_COMMENT_FAIL
        })
        dispatch(setAlert(`Could not add any comment`, error.response.data.message , `error`))
        console.log(error)
    }
}


export const fetchComment = (post) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }

    dispatch({
        type: FETCH_COMMENT_REQUEST
    });

    try {
        const res = await axios.get(`${link}/comment/fetch/${post}`,
            config,
        )
        
        dispatch({
            type: FETCH_COMMENT_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_COMMENT_FAIL
        })
        dispatch(setAlert(`Could not fecth any comments`, error.response.data.message , `error`))
        console.log(error)
    }
}


export const addComment = (token, data) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }

    dispatch({
        type: ADD_COMMENT_REQUEST
    });

    try {
        const res = await axios.post(`${link}/comment/add`,
            data,
            config
        )
        
        dispatch({
            type: ADD_COMMENT_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: ADD_COMMENT_FAIL
        })
        dispatch(setAlert(`Could not add any comment`, error.response.data.message , `error`))
        console.log(error)
    }
}
