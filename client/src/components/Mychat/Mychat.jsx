import React from 'react'
import './Mychat.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Mychat = (chat) => {
    console.log(chat);
    let chatuser, email;
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    if (chat.chat.users[0].email === user?.result?.email) {
        chatuser = chat.chat.users[1].name;
        email = chat.chat.users[1].email;
    } else {
        chatuser = chat.chat.users[0].name;
        email = chat.chat.users[0].email;
    }
    const dispatch=useDispatch();
    const handleClick=(e)=>{
        dispatch({type:'SET_CUR_CHAT',chat:chat.chat._id});
        if(chat.chat.isGroupChat===false){
            dispatch({type:'RESET_GROUP_MEMBERS'});
            if(user?.result?._id!==chat.chat.users[0]._id){
                dispatch({type:'SET_CHAT_HEADER',chat:chat.chat.users[0].name});
            }else{
                dispatch({type:'SET_CHAT_HEADER',chat:chat.chat.users[1].name});
            }
        }else{
            dispatch({type:'SET_CHAT_HEADER',chat:chat.chat.chatname});
            dispatch({type:'SET_GROUP_MEMBERS',data:chat.chat.users});
        }
    }
    return (
        <div>
            {
                chat.chat.isGroupChat === false &&
                <div className='userSearch' onClick={handleClick}>
                    <div>
                        {chatuser}
                    </div>
                    <div>
                        {email}
                    </div>
                </div>
            }
            {
                chat.chat.isGroupChat === true &&
                <div className='userSearch' onClick={handleClick}>
                    {chat.chat.chatname}
                </div>
            }
        </div>
    )
}

export default Mychat
