import { NavLink } from 'react-router-dom';
import arrowBack from '../../images/icons/arrow-go-back.svg';
import s from './BtnGoToMain.module.css';

const BtnGoToMain = () => {
  return (
    <NavLink exact to="/" className={s.link}>
      <img src={arrowBack} alt="стрелка" className={s.img} />
      <p className={s.title}>Вернуться на главную</p>
    </NavLink>
  );
};

export default BtnGoToMain;
