import s from './LogoutBtn.module.css';
import logout from '../../images/icons/logout.svg';

import Modal from '../Modal/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/login/auth-operations';

const LogoutBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
 
  return (
    <div className={s.container}>
      {showModal && (
        <Modal
          onDeny={() => {
            setShowModal(false)
          }}
          onApprove={() => dispatch(authOperations.fetchLogout) } 
          question='Вы действительно хотите выйти?'
        />
      )}
      <span className={s.avatar}>U</span>

      <p className={s.name}>Name</p>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className={s.btn}
        type="button"
      >
        <span className={s.logout}>Выйти</span>
        <img src={logout} alt="logout button" className={s.logoutIcon} />
      </button>
    </div>
  );
};

export { LogoutBtn };
