import s from './LogoutBtn.module.css';
import logout from '../../images/icons/logout.svg';

import Modal from '../Modal/Modal';
import React, { useState } from 'react';

const LogoutBtn = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={s.container}>
      {showModal && (
        <Modal
          onCloseButtonClick={() => {
            setShowModal(false);
          }}
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
