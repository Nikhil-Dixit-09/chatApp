import React from 'react'
import './Mychat.css'
import { useState } from 'react';
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
    return (
        <div>
            {
                chat.chat.isGroupChat === false &&
                <div className='userSearch'>
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
                <div className='userSearch'>
                    {chat.chat.chatname}
                </div>
            }
        </div>
    )
}

export default Mychat
