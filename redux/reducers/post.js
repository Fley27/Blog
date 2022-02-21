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
    ALL_ARTICLE_FAIL,
    ALL_ARTICLE_REQUEST,
    ALL_ARTICLE_SUCCESS,
    REMOVED_ARTICLE_FAIL,
    REMOVED_ARTICLE_REQUEST,
    REMOVED_ARTICLE_SUCCESS,
} from "../consts.js";

const initialState = {
    loading: false,
    article: null, 
    isUpdate: false,
    articles: [],
    prevArticles: [],
    pageNumber: 0,
    drafts: [],
    hasNextPage: true
}

export default function reducer ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case REMOVED_ARTICLE_REQUEST:
        case UPDATE_ARTICLE_REQUEST:
            return {
                ...state, 
                loading: true,
                isUpdate: false,
            }
        case GET_ARTICLE_REQUEST:
        case NEW_ARTICLE_REQUEST:
        case DRAFTS_ARTICLE_REQUEST:
            return {
                ...state, 
                loading: true,
                article: null,
                isUpdate: false,
            }

        
        case ALL_ARTICLE_REQUEST:
            return {
                ...state, 
                loading: true,
                articles: [],
                drafts: []
            }

        case ALL_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: payload.articles,
                pageNumber: payload.pageNumber,
                hasNextPage: payload.hasNextPage
            }
        
        case REMOVED_ARTICLE_SUCCESS:
        case UPDATE_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdate: payload,
            }
        case GET_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                article: payload,
            }
        case DRAFTS_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                drafts: payload,
            }
        case NEW_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                article: payload,
            }
        case UPDATE_ARTICLE_FAIL:
        case REMOVED_ARTICLE_FAIL:
            return {
                ...state,
                loading: false,
                isUpdate: false,
            }
        case ALL_ARTICLE_FAIL:
            return {
                ...state,
                loading: false,
                articles: [null],
            }
        case GET_ARTICLE_FAIL:
        case DRAFTS_ARTICLE_FAIL:
        case NEW_ARTICLE_FAIL:
            return {
                ...state,
                loading: false,
                article: null,
                isUpdate: false,
                pageNumber: 0,
            }
        default: {
            return state
        }
    }
}