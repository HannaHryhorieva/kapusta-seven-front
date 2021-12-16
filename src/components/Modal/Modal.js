// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
// import PropTypes from 'prop-types';

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

          <div className={s.ModalContainerBtn}>
            <button className={s.ModalBtn} type="button">
              Да
            </button>
            <button
              className={s.ModalBtn}
              onClick={onCloseButtonClick}
              type="button"
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
