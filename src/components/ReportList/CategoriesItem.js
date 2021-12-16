import React from 'react';
import { Typography } from '@mui/material';
import s from './reportList.module.css';

const CategoriesItem = ({ category, amount, Icon }) => {
  const formattedAmount = amount.toFixed(2);
  return (
    <li key={category}>
      <Typography
        variant="body1"
        textAlign={'center'}
        fontSize={12}
        color={'#52555F'}
      >
        <span>{formattedAmount}</span>
      </Typography>
      <div className={s.iconWrap}>
        <div className={s.iconEllipse}>{Icon}</div>
      </div>
      <Typography
        variant="body"
        align={'center'}
        fontSize={12}
        color={'#52555F'}
        transform={'uppercase'}
      >
        <span style={{ textTransform: 'uppercase' }}>{category}</span>
      </Typography>
    </li>
  );
};

export default CategoriesItem;
