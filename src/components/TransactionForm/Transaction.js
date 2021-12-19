import 'react-datepicker/dist/react-datepicker.css';
import './datePickerStyles.css';

import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DatePicker from 'react-datepicker';
import { buttonGroupStyles } from './buttonStyles';
import calc from '../../images/icons/calculator.svg';
import calendar from '../../images/icons/calendar.svg';
import expenseCategories from './expenseCategories.json';
import { expenseToBalance } from '../../redux/balance/balance-actions';
import { fetchAddTransaction } from '../../redux/transaction/transactions-operations';
import { getSelectedDate } from '../../redux/transaction/transactions-selectors';
import s from './Transaction.module.css';
import { selectStyles } from './selectStyles';
import { transactionsActions } from '../../redux/transaction';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Transaction({
  categories,
  isIncome,
  placeholder,
  toBalance,
  selectLabel,
}) {
  const selectedDate = useSelector(getSelectedDate);
  const [date, setDate] = useState(
    new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day),
  );
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const isTablet = useMediaQuery(theme.breakpoints.only('tablet'));
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    dispatch(
      fetchAddTransaction({
        year,
        month,
        day,
        description,
        category,
        amount,
        isIncome,
      }),
    );
    dispatch(toBalance(amount));
    reset();
  };

  const reset = () => {
    setDate(new Date());
    setDescription('');
    setCategory('');
    setAmount(0);
  };

  const handleChangeDate = data => {
    dispatch(
      transactionsActions.selectedDate({
        day: data.getDate(),
        month: data.getMonth() + 1,
        year: data.getFullYear(),
      }),
    );
    setDate(data);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapInputs}>
        <label className={s.label}>
          <img src={calendar} style={{ marginRight: '10px' }} alt="calendar" />
          <DatePicker
            id="date"
            className={s.date}
            name="date"
            dateFormat="dd.MM.yyyy"
            selected={date}
            onChange={handleChangeDate}
            required
          />
        </label>

        <input
          className={s.desc}
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <FormControl>
          <InputLabel sx={{ fontSize: '12px' }}>Категория</InputLabel>
          <Select
            sx={
              isMobile
                ? {
                    width: '280px',
                    marginBottom: '30px',
                    borderRadius: '0 0 16px 0',
                    border: '2px solid #FFF',
                    fontSize: '12px',
                  }
                : isTablet
                ? {
                    width: '168px',
                    marginBottom: 0,
                    borderRight: 'none',
                    borderRadius: '0',
                    fontSize: '12px',
                  }
                : selectStyles
            }
            id="select"
            name="category"
            label={selectLabel}
            value={category}
            onChange={handleChange}
            required
          >
            {categories.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                id={option.value}
                style={{ fontSize: '12px' }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <label className={s.sumWrap}>
          <input
            className={s.sum}
            type="number"
            name="amount"
            value={amount}
            onChange={handleChange}
            placeholder="0,00"
            pattern="^\d{1,3}(\s\d{3})*(\.\d+)?$"
            required
          />
          <img className={s.iconCalc} src={calc} alt="калькулятор" />
        </label>
      </div>

      <ButtonGroup color="secondary" variant="outlined" sx={buttonGroupStyles}>
        <Button type="submit">Ввод</Button>
        <Button type="button" onClick={reset}>
          Очистить
        </Button>
      </ButtonGroup>
    </form>
  );
}

Transaction.defaultProps = {
  isIncome: false,
  categories: expenseCategories,
  placeholder: 'Описание расхода',
  toBalance: expenseToBalance,
  selectLabel: 'Категория товара',
};

export default Transaction;
