import {
    LIKE_FAIL,
    LIKE_REQUEST,
    LIKE_SUCCESS,
    ISLIKE_FAIL,
    ISLIKE_REQUEST,
    ISLIKE_SUCCESS,
    link
} from "../consts.js";
import axios from "axios";
import { setAlert } from "./alert";

export const isLike = (token, id) => async (dispatch) => {  

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token,
            "article": id
        },
    }

    dispatch({
        type: ISLIKE_REQUEST
    });

    try {
        const res = await axios.get(`${link}/like`,
            config
        )
        
        dispatch({
            type: ISLIKE_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: ISLIKE_FAIL
        })
        dispatch(setAlert(`Cannot perform the required action.`, error.response.data.message , `error`))
        console.log(error)
    }
}


export const like = (token, id) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token,
            "article": id
        },
    }

    dispatch({
        type: LIKE_REQUEST
    });

    const data = {};
    data.post = id;

    try {
        const res = await axios.post(`${link}/like`,
            JSON.stringify(data),
            config
        )
        
        dispatch({
            type: LIKE_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: LIKE_FAIL
        })
        dispatch(setAlert(`Cannot perform the required action.`, error.response.data.message , `error`))
        console.log(error)
    }
}
