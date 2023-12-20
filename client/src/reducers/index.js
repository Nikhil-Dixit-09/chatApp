import { combineReducers } from "redux"
import user from './user'
import auth from './auth'
import notification from './notification'

import userList from './userList'

import chatList from './chat'
import chat from './chat2'

import messageList from './messageList'
import chatHeader from './chatHeader'
import groupMembers from './groupMembers'
import message from './message'
export default combineReducers({
    user,auth,notification,userList,chatList,chat,messageList,chatHeader,groupMembers,message
});