import s from "./AppBar.module.css";
import logo from "../../images/icons/logo.svg"
import { LogoutBtn } from "../LogoutBtn/LogoutBtn"


function AppBar() {
  return (
    <header className={s.header}>
      <img src={logo} alt="Logo" className={s.logo}/>   
    <LogoutBtn/>
    </header>
  );
}

export { AppBar }