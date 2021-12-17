import { ButtonGroup, Button, Select, MenuItem } from '@mui/material';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from './Transaction.module.css'
import categories from './categories.json'
import { buttonGroupStyles } from './buttonStyles'
import { selectStyles } from './selectStyles'
import calc from '../../images/icons/calculator.svg'
import './datePickerStyles.css'
import calendar from '../../images/icons/calendar.svg'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function Transaction() {
  
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
    const [category, setCategory] = useState('')
const [sum, setSum] = useState()    
//   const dispatch = useDispatch();
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
        case 'sum':
            setSum(value);
            break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
      console.log([date, description, category, sum])
    reset();
  };

    const reset = () => {
      setDate(new Date())
      setDescription('');
      setCategory('')
      setSum(0)
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
            placeholder='Описание расхода'
            />
            <Select
                sx={isMobile
              ? { width: '280px', marginBottom: '30px', }
              : isTablet
              ? { width: '168px', marginBottom: 0,  borderRight: 'none', }
              : selectStyles}
                id="select"
                name='category'
                label="Категория товара"
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
            name="sum"
            value={sum}
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
                <Button type="submit">Ввод</Button>
                <Button type="button" onClick={reset}>Очистить</Button>
</ButtonGroup>
         
      </form>
    )

}

export default Transaction;