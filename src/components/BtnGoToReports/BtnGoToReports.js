import { NavLink } from 'react-router-dom';
import s from './BtnGoToReports.module.css';
import chart from '../../images/icons/chart-icon.svg';

const BtnGoToReports = () => {
  return (
    <NavLink to="/report" className={s.link}>
      Перейти к отчетам
      <img src={chart} alt="диарама" className={s.img} />
    </NavLink>
  );
};

export { BtnGoToReports };
