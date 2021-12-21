import 'react-datepicker/dist/react-datepicker.css';
import '../TransactionForm/datePickerStyles.css';
import s from './DatePick.module.css'
import calendar from '../../images/icons/calendar.svg';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsActions } from '../../redux/transaction';
import { getSelectedDate } from '../../redux/transaction/transactions-selectors';
import { useState } from 'react'

export const DatePick = () => { 

const dispatch = useDispatch();
  const selectedDate = useSelector(getSelectedDate);
  const [date, setDate] = useState(
  new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day),
    );
    
  const handleChange = data => {
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
    <div className={ s.wrapper}>
      <img src={calendar} className={ s.img} alt="calendar" />
          <DatePicker
            id="date"
            // className={s.date}
            name="date"
            dateFormat="dd.MM.yyyy"
            selected={date}
            onChange={handleChange}
            maxDate={new Date()}
          />
        </div>
  )
}
       