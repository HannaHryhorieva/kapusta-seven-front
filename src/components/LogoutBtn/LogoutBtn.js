import s from './LogoutBtn.module.css';
import logout from '../../images/icons/logout.svg';

const LogoutBtn = () => {
  return (
    <div className={s.container}>
      <span className={s.avatar}>U</span>

      <p className={s.name}>Name</p>
      <button className={s.btn} type="button">
        <span className={s.logout}>Выйти</span>
        <img src={logout} alt="logout button" className={s.logoutIcon} />
      </button>
    </div>
  );
};

export { LogoutBtn };
