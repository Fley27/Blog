import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import alert from "./alert";
import auth from "./auth";
import post from "./post"
import comment from "./comment"
import like from "./like"
import user from "./user"


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'] 
}

const rootReducer =  combineReducers({
    alert,
    auth,
    post,
    comment,
    like,
    user
});

export default persistReducer(persistConfig, rootReducer)