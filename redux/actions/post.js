import {
    NEW_ARTICLE_FAIL,
    NEW_ARTICLE_REQUEST,
    NEW_ARTICLE_SUCCESS,
    DRAFTS_ARTICLE_FAIL,
    DRAFTS_ARTICLE_REQUEST,
    DRAFTS_ARTICLE_SUCCESS,
    GET_ARTICLE_FAIL,
    GET_ARTICLE_REQUEST,
    GET_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAIL,
    UPDATE_ARTICLE_REQUEST,
    UPDATE_ARTICLE_SUCCESS,
    REMOVED_ARTICLE_FAIL,
    REMOVED_ARTICLE_REQUEST,
    REMOVED_ARTICLE_SUCCESS,
    ALL_ARTICLE_FAIL,
    ALL_ARTICLE_REQUEST,
    ALL_ARTICLE_SUCCESS,
    link
} from "../consts.js";
import axios from "axios";
import { setAlert } from "./alert";


export const removedArticle = (token, id) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }
    alert(token)
    dispatch({
        type: REMOVED_ARTICLE_REQUEST
    })

    try {
        const res = await axios.put(`${link}/article/removed/${id}`,
            {},
            config
        )
        
        dispatch({
            type: REMOVED_ARTICLE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert(`The article was removed successfully.`,"", `success`))

    } catch (error) {
        dispatch({
            type: REMOVED_ARTICLE_FAIL
        })
        dispatch(setAlert(`Could not update this article`, error.response.data.message , `error`))
        console.log(error)
    }
}

export const fetchArticles = (token, body) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }
    dispatch({
        type: ALL_ARTICLE_REQUEST
    })
    try {
        const res = await axios.post(`${link}/article/articles`,
            body,
            config
        )
        
        dispatch({
            type: ALL_ARTICLE_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: ALL_ARTICLE_FAIL
        })
        console.log(error);
        dispatch(setAlert(`Could not fetch any article`, error.response.data.message , `error`))
        console.log(error)
    }
}

export const approvedArticle = (token, id, body) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }

    dispatch({
        type: UPDATE_ARTICLE_REQUEST
    })

    try {
        const res = await axios.put(`${link}/article/approved/${id}`,
            body,
            config
        )
        
        dispatch({
            type: UPDATE_ARTICLE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert(`The article was edited.`,"", `success`))

    } catch (error) {
        dispatch({
            type: UPDATE_ARTICLE_FAIL
        })
        dispatch(setAlert(`Could not update this article`, error.response.data.message , `error`))
        console.log(error)
    }
}

export const getArticle = (id) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }
    dispatch({
        type: GET_ARTICLE_REQUEST
    })
    try {
        const res = await axios.get(`${link}/article/${id}`, 
            config
        )
        dispatch({
            type: GET_ARTICLE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_ARTICLE_FAIL
        })
        dispatch(setAlert(`Could not fetch this article`, error.response.data.message , `error`))
        console.log(error)
    }
}

export const draftsArticles = (token) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }
    dispatch({
        type: DRAFTS_ARTICLE_REQUEST
    })
    try {
        const res = await axios.get(`${link}/article/drafts`, 
            config
        )
        dispatch({
            type: DRAFTS_ARTICLE_SUCCESS,
            payload: res.data
        })

       // dispatch(setAlert(`This acrticle has been add successfully.`, `success`))
    } catch (error) {
        dispatch({
            type: DRAFTS_ARTICLE_FAIL
        })
        dispatch(setAlert(`Cannot fetch any article`, error.response.data.message , `error`))
        console.log(error)
    }
}

export const newArticle = (data, token) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": token,
            "user": token
        },
    }
    dispatch({
        type: NEW_ARTICLE_REQUEST
    })

    try {
        const body = data;
        const res = await axios.post(`${link}/article/new`, 
            body,
            config
        )
        dispatch({
            type: NEW_ARTICLE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert(`This acrticle has been add successfully.`, `success`))
    } catch (error) {
        dispatch({
            type: NEW_ARTICLE_FAIL
        })
        dispatch(setAlert(`Can't create a new article`, error.response.data.message , `error`))
        console.log(error)
    }
} 