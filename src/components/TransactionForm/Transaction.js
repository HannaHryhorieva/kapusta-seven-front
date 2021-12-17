import { ButtonGroup, Button, Select, MenuItem } from '@mui/material';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from './Transaction.module.css'
import categories from './expenseCategories.json'
import { buttonGroupStyles } from './buttonStyles'
import { selectStyles } from './selectStyles'
import calc from '../../images/icons/calculator.svg'
import './datePickerStyles.css'
import calendar from '../../images/icons/calendar.svg'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { fetchAddTransaction } from '../../redux/transaction/transactions-operations'
import { expenseToBalance } from '../../redux/balance/balance-actions'


function Transaction({ categories, isIncome, placeholder, toBalance, selectLabel}) {
  
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
    const [category, setCategory] = useState('')
const [amount, setAmount] = useState()    
const dispatch = useDispatch();
//   const contacts = useSelector(getFilteredContacts);
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
    const month = date.getMonth();
    const day = date.getDate();
    dispatch(fetchAddTransaction({ year, month, day, description, category, amount, isIncome}))
    dispatch(toBalance(amount))
    console.log([year, month, day, description, category, amount])
    reset();
  };

    const reset = () => {
      setDate(new Date())
      setDescription('');
      setCategory('')
      setAmount(0)
  };

 
    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={ s.wrapInputs}>
        <label className={ s.label}>
          <img src={calendar} style={{marginRight: '10px'}} alt='calendar'/>
          <DatePicker
                id='date'
                className={s.date}
                name='date'
                dateFormat="dd.MM.yyyy"
                selected={date}
                onChange={data => setDate(data)}
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
            <Select
                sx={isMobile
              ? { width: '280px', marginBottom: '30px', }
              : isTablet
              ? { width: '168px', marginBottom: 0,  borderRight: 'none', }
              : selectStyles}
                id="select"
                name='category'
            label={ selectLabel}
                value={category}
                onChange={handleChange}
                required
            >
                {categories.map((option) => (
              <MenuItem key={option.value} value={option.value} id={ option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <label className={s.sumWrap}>
          <input
            className={s.sum}
            type="number"
            name="amount"
            value={amount}
            onChange={handleChange}
            placeholder='0,00'
            pattern="^\d{1,3}(\s\d{3})*(\.\d+)?$"
            required
            />
            <img className={s.iconCalc } src={ calc} alt='калькулятор'/>
          </label>
          </div>
          
            <ButtonGroup
            color="secondary"
        variant="outlined"
        sx={buttonGroupStyles}
            >
                <Button type="submit" >Ввод</Button>
                <Button type="button" onClick={reset}>Очистить</Button>
</ButtonGroup>
         
      </form>
    )

}

Transaction.defaultProps = {
  isIncome: false,
  categories: categories, 
  placeholder: 'Описание расхода',
  toBalance: expenseToBalance,
selectLabel: 'Категория товара'
}
export default Transaction;