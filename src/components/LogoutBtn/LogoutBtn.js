import s from "./LogoutBtn.module.css"
import logout from "../../assets/logout.svg"
//import Avatar from '@mui/material/Avatar';

// const avatar = {
//     width: '16px',
//     height: '16px',
//     color: '#52555F',

//     fontSize: '12px',
//     lineHeight: '1.6',
//     textAlign: 'center'

// }
const LogoutBtn = () => {
    return (
        <div className={s.container}>
            <span className={ s.avatar}>U</span>

            <p className={s.name}>Name</p>
        <button className={s.btn} type="button">
                <span className={ s.logout}>Выйти</span>
                <img src={logout} alt="logout button" className={s.logoutIcon} />
      </button>
    </div>
    )
}

export { LogoutBtn }