import React from 'react'
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import talk from '../../assets/icons8-chat-24.png'
import { getUserList } from '../../actions/user';
import searc from '../../assets/search.png'
import Users from '../UserSearch/Users';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom'
import { fetchChat } from '../../actions/chat';
import Mychat from '../Mychat/Mychat';
import plus from '../../assets/icons8-plus-40.png'
import Group from '../Group/Group';
const customStyles = {
  content: {
    top: '0%',
    left: '0%',
    right: 'auto',
    bottom: 'auto'
  },
};
const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const Home = () => {

  const notification = useSelector(state => state.notification);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(notification);
  console.log(user);
  const [search, setS] = useState("");
  const [showSearch, setSearch] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const userList = useSelector(state => state.userList);
  const chatList=useSelector(state=>state.chatList);
  console.log(chatList);
  useEffect(()=>{
    dispatch(fetchChat());
  },[user]);
  console.log(userList);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setS(e.target.value);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    const textField = document.getElementById("blur");
    textField.blur();
    setIsOpen(false);
  }
  useEffect(() => {
    console.log(search);
    if (search.length !== 0) {
      dispatch(getUserList(search));
    } else {
      dispatch({ type: 'RESET_USER_LIST' });
    }

  }, [search]);
  const dispatch = useDispatch();
  const notify4 = () => toast('Successfully signed in', {
    type: 'success',
  });
  const notify7 = () => toast('Successfully signed up', {
    type: 'success',
  });
  const notify9 = () => toast('Added chat successfully', {
    type: 'success',
  });
  useEffect(() => {
    console.log(notification);
    if (notification === 4) {
      notify4();
    } else if (notification === 7) {
      notify7();
    }else if(notification===9){
      notify9();
      dispatch(fetchChat());
    }
    dispatch({ type: 'RESET', which: 0 });
  }, [notification]);
  const handleClickSearch = (e) => {
    setSearch(1);
  }
  const logout=(e)=>{
    dispatch({type:'LOGOUT'});
    dispatch({type:'CHANGE_NOTI',which:8});
    navigate('/auth');
  }


  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }


  return (
    <div className='home'>
      <div className='myDiv'>
        <div className='left'>
          <div className='alignSearch'>
            <div>
              <img src={searc} alt="" />
            </div>
            <div>
              <input onClick={openModal} type="text" placeholder='Search User' value={""} id='blur' className='searchInput2' />
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className='myModal'>
                <div className='alignSearch2'>
                  <div>
                    <img src={searc} alt="" />
                  </div>
                  <div>
                    <input onChange={handleChange} value={search} onClick={openModal} type="text" placeholder='Search User' className='searchInput' autoFocus />
                  </div>
                </div>
                <div>
                  {
                    userList.map(function (user, index) {
                      return <Users user={user} />;
                    })
                  }
                </div>

              </div>
            </Modal>

          </div>
          <div className='talkify'>
            <div className='text'>
              Talkify
            </div>
            <div>
              <img src={talk} alt="" />
            </div>




          </div>
        </div>

        <div className='right' >
          <button className='logout' onClick={logout}>Logout</button>
          {user?.result?.name}
          
        </div>
      </div>

      <div className='body'>
        <div className='left'>

          <div className='bodyFooter'>
            <div>
              My Chats
            </div>
            <div className='newChatGroup' onClick={openModal2}>
              <div className='padding'>
              New Group Chat
              </div>
              <div>
              <img src={plus} alt="" />
              </div>
              
            </div>
            <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles2}
        contentLabel="Example Modal"
      >
        <Group/>
      </Modal>
          </div>


          <div>
          {
                    chatList.map(function (chat, index) {
                      return <Mychat chat={chat} />;
                    })
                  }
          </div>


        </div>



        <div className='chatWindow'>

        </div>


      </div>
      <ToastContainer />
    </div>
  )
}

export default Home
