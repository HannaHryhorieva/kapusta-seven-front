import { useFormik } from "formik"
//import * as Yup from 'yup'
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateAdapter from '@mui/lab/AdapterDateFns';
// import DatePicker from '@mui/lab/DatePicker'
import {TextField, MenuItem, Button} from '@mui/material';
//import { useCallback } from 'react'
//import { useDispatch } from 'react-redux';
import { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import categories from './categories.json'

// const validationSchema = Yup.object({
//   //date: Yup.date.required,
//   description: Yup.string(),
//   //category: Yup.string().select,
//   sum: Yup.string().required('Обязательное поле'),
        
  
// });

const TransactionForm = () => {
    // const handleSubmit = useCallback(async (values, { setSubmitting, resetForm }) => { }
    const [transaction, setTransaction] = useState(null)
    const formik = useFormik({
        // validationSchema: validationSchema,
        initialValues: {
            date: new Date(),
            description: '',
            category: '',
            sum: 0,
        },
        onSubmit: (values) => {
            setTransaction(JSON.stringify(values))
            console.log(JSON.parse(transaction))
        }
    })
    return (
    
        <form onSubmit={formik.onSubmit}>
            {/* <LocalizationProvider dateAdapter={DateAdapter}>
                           <DatePicker
            inputFormat="MM/dd/yyyy"
          value={formik.values.date}
          onChange={formik.handleChange}
                    // renderInput={(params) => <TextField {...params} />} 
                    />
             </LocalizationProvider> */}
            <DatePicker
                id='date'
                name='date'
                dateFormat="dd/MM/yyyy"
                selected={ formik.values.date}
                    value={formik.values.date}
          onChange={formik.handleChange}
            />
                {/* <TextField
                    id='date'
                    name='date'
                    value={formik.values.date}
          onChange={formik.handleChange}
                type='date'/> */}
            <TextField
            id="description"
          name="description"
          placeholder='Описание расхода'
          type="text"
          value={formik.values.description}
          onChange={formik.handleChange}
            />
        
            <TextField
                
                    select
                    sx={{ width: '188px', borderRadius: '0' }}
                id="demo-controlled-open-select"
                name='category'
                label="Категория товара"
          value={formik.values.category}
                onChange={formik.handleChange}
              
        >
          {categories.map((option) => (
              <MenuItem key={option.value} value={option.value} id={ option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
          
            <TextField
            id="sum"
          name="sum"
                placeholder='0,00'
                pattern="^\d{1,3}(\s\d{3})*(\.\d+)?$"
          type="number"
          value={formik.values.sum}
          onChange={formik.handleChange}
            />
            {/* <ButtonGroup color="primary" variant="contained"> */}
                 <Button type="submit">Ввод</Button>
            <Button type="reset" >Очистить</Button>
           
            </form>
        
    )
 }

export default TransactionForm