import s from './AppBar.module.css';
import logo from '../../images/icons/logo.svg';
import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
// import { getIsLoggedIn } from '../../redux/login/auth-selectors';
// import { useSelector } from 'react-redux';

function AppBar() {
  // const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <header className={s.header}>
      <img src={logo} alt="Logo" className={s.logo} />
      {/* { isLoggedIn && <LogoutBtn />} */}
      <LogoutBtn/>
    </header>
  );
}

export { AppBar };
