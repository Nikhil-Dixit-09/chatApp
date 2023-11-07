import React from 'react'
import { useState } from 'react'
import './Auth.css'
import chat from '../../assets/icons8-chat-96.png' 
const Auth = () => {
  const [login,setLogin]=useState(true);
  const toggle=(e)=>{
    setLogin(!login);
  }
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');


  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

  }
  return (
    <div className='auth'>
      <div className='authCenter'>
        <div className='authTalkify'>Talkify
          </div>  
          <div>
          <img src={chat} alt="" /> </div>
          </div>
          
      <form onSubmit={handelSubmit} className='authForm'>
        {
          login===false &&
          <div>
            <div className='authDiv'>
            Enter Name:
          </div>
          <input className='authInput' type="text" onChange={(e)=>setName(e.target.value)}/>
          </div>
        }
        

        <div className='authDiv'>
          Enter Email: 
        </div>
        <input className='authInput' type="text" onChange={(e)=>setEmail(e.target.value)}  />

        <div className='authDiv'>
          Enter Password:
        </div>
        <input className='authInput' type="password" onChange={(e)=>setPassword(e.target.value)}/>
        {
          login===false &&
          <div>
            <div className='authDiv'>
          Confirm Password:
        </div>
        <input className='authInput' type="password" onChange={(e)=>setConfirmPassword(e.target.value)} />
          </div>
        }
        

        
          {
            login===true &&
            <div  className='authButton1'>
              <button onClick={toggle}>Don't have an account</button>
            </div>
          }
          {
            login===false &&
            <div className='authButton2'>
              <button onClick={toggle}>Already have an account</button>
            </div>
          }
        
        <button type='submit' className='authAction'>
          {
            login===true&& 
            <div className='authActionText'>
              Login
            </div>
          }
          {
            login===false &&
            <div className='authActionText'>
              Sign Up
            </div>
          }
        </button>
      </form>
    </div>
  )
}

export default Auth
