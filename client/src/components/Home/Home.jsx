import React from 'react'
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import talk from '../../assets/icons8-chat-24.png'
import search from '../../assets/search.png'
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '0%',
    left: '0%',
    right: 'auto',
    bottom: 'auto'
  },
};
Modal.setAppElement('#root');

const Home = () => {

  const notification = useSelector(state => state.notification);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(notification);
  console.log(user);
  const [showSearch, setSearch] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();
  const notify4 = () => toast('Successfully signed in', {
    type: 'success',
  });
  const notify7 = () => toast('Successfully signed up', {
    type: 'success',
  });
  useEffect(() => {
    console.log(notification);
    if (notification === 4) {
      notify4();
    } else if (notification === 7) {
      notify7();
    }
    dispatch({ type: 'RESET', which: 0 });
  }, [notification]);
  const handleClickSearch = (e) => {
    setSearch(1);
  }
  return (
    <div className='home'>
      <div className='myDiv'>
        <div className='left'>
          <div className='alignSearch'>
            <div>
              <img src={search} alt="" />
            </div>
            <div>
              <input onClick={openModal} type="text" placeholder='Search User' className='searchInput' />
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className='alignSearch2'>
                <div>
                  <img src={search} alt="" />
                </div>
                <div>
                  <input onClick={openModal} type="text" placeholder='Search User' className='searchInput' autoFocus />
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
          {user?.result?.name}
        </div>
      </div>

      <div>
        <div>

        </div>
        <div>

        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Home
