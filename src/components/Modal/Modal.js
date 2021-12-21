import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './Modal.module.css';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onDeny, handleAgreeButtonClick, question }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onDeny();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onDeny();
    }
  };

  const handleButtonClick = () => {
    handleAgreeButtonClick();
    onDeny();
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <span className={s.modalClose} onClick={onDeny}>
          &#10005;
        </span>
        <div className={s.ModalContainer}>
          <div className={s.ModalItems}>
            <p>{question}</p>
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
