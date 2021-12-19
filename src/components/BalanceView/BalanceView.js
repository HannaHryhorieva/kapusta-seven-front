import { Tooltip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUpdBalance } from '../../redux/balance/balance-operations';
import { getBalance } from '../../redux/balance/balance-selectors';
import s from './BalanceView.module.css';
import { useState } from 'react';

const BalanceView = () => {
  const [inputValue, setInputValue] = useState({});

  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });
  
  const dispatch = useDispatch();
  const balance = useSelector(getBalance);

  // const formatNumber = n => {
  //   return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  // };

  const handleChange = e => {
    let value = e.target.value;
    // if (value.indexOf('.') >= 0) {
    //   const decimalPos = value.indexOf('.');;
    //   let leftSide = value.substring(0, decimalPos);
    //   let rightSide = value.substring(decimalPos);

    //   leftSide = formatNumber(leftSide);
    //   rightSide = formatNumber(rightSide);

    //   rightSide = rightSide.substring(0, 2);
    //   value = leftSide + '.' + rightSide;
    // } else {
    //   value = formatNumber(value);
    // }
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // let submitValue = inputValue;
    // if (!inputValue.includes('.')) {
    //   submitValue += '.00';
    // }
    //with back
    dispatch(fetchUpdBalance(Number(inputValue)));
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Баланс:</p>
      {balance > 0 ? (
        <span className={s.balance}> {formatter.format(balance)}</span>
      ) : (
        <form className={s.form} onSubmit={handleSubmit}>
          <Tooltip
            title={
              <Typography color="inherit">
                <span style={{ display: 'block', marginBottom: '20px' }}>
                  Привет! Для начала работы внеси текущий баланс своего счета!
                </span>
                <span style={{ fontSize: '14px' }}>
                  Ты не можешь тратить деньги пока их у тебя нет :)
                </span>
              </Typography>
            }
            arrow
          >
            <input
              value={inputValue}
              onChange={handleChange}
              pattern="^\d{1,3}(\s\d{3})*(\.\d+)?$"
              type="number"
              className={s.input}
              autoComplete="on"
              autoFocus
              placeholder="0,00 грн."
            />
          </Tooltip>
          <button type="submit" className={s.button}>
            Подтвердить
          </button>
        </form>
      )}
    </div>
  );
};

export default BalanceView;
