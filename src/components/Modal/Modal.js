import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './Modal.module.css';

import { Button } from '@mui/material';

const modalRoot = document.querySelector('#modal-root');

type ModalProps = {
  onCloseButtonClick: () => void,
};

function Modal(props: ModalProps) {
  const { onCloseButtonClick } = props;
  return createPortal(
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <span className={s.modalClose} onClick={onCloseButtonClick}>
          &#10005;
        </span>
        <div className={s.ModalContainer}>
          <div className={s.ModalItems}>
            <p>Вы действительно хотите выйти?</p>
          </div>

          {/* <div className={s.ModalContainerBtn}> */}
          <ul className={s.ModalContainerBtn}>
            <li className={s.ModalBtn}>
              <Button color="primary" variant="contained">
                Да
              </Button>
            </li>
            <li>
              <Button color="info" variant="outlined">
                нет
              </Button>
            </li>
          </ul>

          {/* <button className={s.ModalBtn} type="button">
              Да
            </button> */}
          {/* <button
              className={s.ModalBtn}
              onClick={onCloseButtonClick}
              type="button"
            >
              Нет
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
