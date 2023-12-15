import { combineReducers } from "redux";
import user from './user'
import auth from './auth'
import notification from './notification'
import userList from './userList'
import chatList from './chat'
export default combineReducers({
    user,auth,notification,userList,chatList
});