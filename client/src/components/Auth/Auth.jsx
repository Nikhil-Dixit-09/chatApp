import React from 'react'
import { useState } from 'react'
import './Auth.css'
import chat from '../../assets/icons8-chat-96.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { signin } from '../../actions/auth'
import { signups } from '../../actions/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [login, setLogin] = useState(true);
  const notification = useSelector(state => state.notification);
  console.log(notification, 'hiiiii');
  const toggle = (e) => {
    setLogin(!login);
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const notify1 = () => toast('User does not exist!!', {
    type: 'error',
  });
  const notify2 = () => toast('Invalid Credentials!!', {
    type: 'error',
  });
  const notify3 = () => toast('Something went wrong!!', {
    type: 'error',
  });
  
  const notify5 = () => toast('User already exists', {
    type: 'error',
  });
  const notify6 = () => toast('Passwords did not match', {
    type: 'error',
  });
 
  useEffect(()=>{
    if(notification===1){
      notify1();
      dispatch({type:'RESET',which:0});
    }else if(notification===2){
      notify2();
      dispatch({type:'RESET',which:0});
    }else if(notification===3){
      notify3();
      dispatch({type:'RESET',which:0});
    }else if(notification===5){
      notify5();
      dispatch({type:'RESET',which:0});
    }else if(notification===6){
      notify6();
      dispatch({type:'RESET',which:0});
    }
    
  },[notification]);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    const formData = {};
    formData.name = name;
    formData.email = email;
    formData.password = password;
    formData.confirmPassword = confirmPassword;
    if (login === true) {
      dispatch(signin(formData, navigate));
    } else {
      dispatch(signups(formData, navigate));
    }

  }

  const handleClick = () => {
    console.log('hiii')
    notify1();
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
          login === false &&
          <div>
            <div className='authDiv'>
              Enter Name:
            </div>
            <input className='authInput' type="text" onChange={(e) => setName(e.target.value)} />
          </div>
        }


        <div className='authDiv'>
          Enter Email:
        </div>
        <input className='authInput' type="text" onChange={(e) => setEmail(e.target.value)} />

        <div className='authDiv'>
          Enter Password:
        </div>
        <input className='authInput' type="password" onChange={(e) => setPassword(e.target.value)} />
        {
          login === false &&
          <div>
            <div className='authDiv'>
              Confirm Password:
            </div>
            <input className='authInput' type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        }




        <br />
        <button type='submit' className='authAction'>
          {
            login === true &&
            <div className='authActionText'>
              Login
            </div>

          }

          {
            login === false &&
            <div className='authActionText'>
              Sign Up
            </div>
          }

        </button>
        {
          login === true &&
          <div className='authButton1'>
            <button onClick={toggle}>Don't have an account</button>
          </div>
        }
        {
          login === false &&
          <div className='authButton2'>
            <button onClick={toggle}>Already have an account</button>
          </div>
        }

      </form>
  
      <ToastContainer />
    </div>
  )
}

export default Auth
