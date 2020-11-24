import { combineReducers } from 'redux';
import auth from "./authReducers"
import admin from "./adminReducers"
import user from "./userReducers"
import site from "./siteReducers"

export default combineReducers({
    auth, admin, user, site
})