import { Auth } from '../../components/Auth/Auth';
import React from 'react';
import s from './AuthView.module.css';

function AuthView() {
  return (
    <>
      <div className={s.backgroundElements}></div>
      <div className="background-top"></div>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.header}>
            <h1 className={s.logo}>Kapu$ta</h1>
            <p className={s.slogan}>smart finance</p>
          </div>
          <div className={s.form}>
            <Auth />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthView;
