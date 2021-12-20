import s from './LogoutBtn.module.css';
import logoutIcon from '../../images/icons/logout.svg';
import authOperations from '../../redux/login/auth-operations';
import Modal from '../Modal/Modal';
import React, { useState } from 'react';

import { logoutUser } from '../../redux/login/auth-actions';
import { useDispatch } from 'react-redux';

const LogoutBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  // const id = useSelector(getUserId());

  const logout = () => {
    dispatch(logoutUser());
  };


  return (
    <div className={s.container}>
      {showModal && (
        <Modal
          onDeny={() => {
            setShowModal(false)
          }}
          handleAgreeButtonClick={logout}

//           onApprove={() => dispatch(authOperations.fetchLogout) } 
//           question='Вы действительно хотите выйти?'

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
        <img src={logoutIcon} alt="logout button" className={s.logoutIcon} />
      </button>
    </div>
  );
};

export { LogoutBtn };
