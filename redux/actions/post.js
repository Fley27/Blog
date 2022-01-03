import {
    NEW_POST_FAIL,
    NEW_POST_REQUEST,
    NEW_POST_SUCCESS,
    link
} from "../consts.js";
import axios from "axios";
import { setAlert } from "./alert";

export const newPost = (data) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }
    dispatch({
        type: NEW_POST_REQUEST
    })
    console.log(data)
    try {
        const body = data;
        const res = await axios.post(`${link}/article/new`, 
            body,
            config
        )
        dispatch({
            type: NEW_POST_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert(`This acrticle has been add successfully.`, `success`))
    } catch (error) {
        dispatch({
            type: NEW_POST_FAIL
        })
        dispatch(setAlert(`Can't create a new article`, error.response.data.message , `error`))
        console.log(error)
    }
}