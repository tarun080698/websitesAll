import { combineReducers } from 'redux';
import auth from "./authReducers"
import admin from "./adminReducers"
import user from "./userReducers"

export default combineReducers({
    auth, admin, user
})