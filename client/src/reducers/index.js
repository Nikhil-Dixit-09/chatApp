import { combineReducers } from "redux"
import user from './user'
import auth from './auth'
import notification from './notification'

import userList from './userList'

import chatList from './chat'
import chat from './chat2'

import messageList from './messageList'
export default combineReducers({
    user,auth,notification,userList,chatList,chat,messageList
});