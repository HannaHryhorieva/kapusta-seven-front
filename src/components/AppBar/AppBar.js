import s from "./AppBar.module.css";
import logo from "../../assets/logo.svg"
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