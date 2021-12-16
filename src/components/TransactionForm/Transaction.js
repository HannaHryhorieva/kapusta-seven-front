import { ButtonGroup, Button, Select, MenuItem } from '@mui/material';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from './Transaction.module.css'
import categories from './categories.json'
import { buttonGroupStyles } from './buttonStyles'
import { selectStyles } from './selectStyles'
import calc from '../../images/icons/calculator.svg'
 

function Transaction() {
  
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
    const [category, setCategory] = useState('')
const [sum, setSum] = useState(0)    
//   const dispatch = useDispatch();
//   const contacts = useSelector(getFilteredContacts);
 
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
            <DatePicker
                id='date'
                className={ s.date}
                name='date'
                dateFormat="dd.MM.yyyy"
                selected={date}
                onChange={data => setDate(data)}
                required
            />
          <input
            className={s.desc}
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder='Описание расхода'
            />
            <Select
                sx={selectStyles}
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
          <input
            className={s.sum}
            type="number"
            name="sum"
            value={sum}
            onChange={handleChange}
            placeholder='0,00'
            pattern="^\d{1,3}(\s\d{3})*(\.\d+)?$"
            //title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            />
            <img className={s.iconCalc } src={ calc} alt='калькулятор'/>
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