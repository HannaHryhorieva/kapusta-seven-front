import { NavLink } from 'react-router-dom';
import chart from '../../images/icons/chart-icon.svg';
import s from './BtnGoToReports.module.css';

const BtnGoToReports = () => {
  return (
    <NavLink to="/report" className={s.link}>
      Перейти к отчетам
      <img src={chart} alt="диаграма" className={s.img} />
    </NavLink>
  );
};

export default BtnGoToReports;
