import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './Modal.module.css';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, handleAgreeButtonClick }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = () => {
    handleAgreeButtonClick();
    onClose();
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <span className={s.modalClose} onClick={handleBackdropClick}>
          &#10005;
        </span>
        <div className={s.ModalContainer}>
          <div className={s.ModalItems}>
            <p>Вы действительно хотите выйти?</p>
          </div>

          <ul className={s.ModalContainerBtn}>
            <li className={s.ModalBtn}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleButtonClick}
              >
                Да
              </Button>
            </li>
            <li>
              <Button
                color="info"
                variant="outlined"
                onClick={handleBackdropClick}
              >
                Нет
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
