import React from 'react'
import './Users.css'
import { useDispatch } from 'react-redux';
import { accessChat } from '../../actions/chat';
const Users = (user) => {
    console.log(user);
    console.log(user.user.name);
    const dispatch=useDispatch();
    const handleAccess=(e)=>{
      let formData={};
      formData.userId=user.user._id;
      console.log(formData);
      dispatch(accessChat(formData));
    }
  return (
    <div className='userSearch' onClick={handleAccess}>
        <div>
        {user.user.name}
        </div>
        <div>
            {user.user.email}
        </div>
      
    </div>
  )
}

export default Users
