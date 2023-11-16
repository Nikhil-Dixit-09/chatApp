import React from 'react'
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const Home = () => {
  const notification=useSelector(state=>state.notification);
  console.log(notification);
  const dispatch=useDispatch();
  const notify4 = () => toast('Successfully signed in', {
    type: 'success',
  });
  const notify7 = () => toast('Successfully signed up', {
    type: 'success',
  });
  useEffect(()=>{
    console.log(notification);
    if(notification===4){
      notify4();
    }else if(notification===7){
      notify7();
    }
    dispatch({type:'RESET',which:0});
  },[notification]);
  return (
    <div>
      <div classname='Home'>
        
      </div>
      
      <ToastContainer />
    </div>
  )
}

export default Home
