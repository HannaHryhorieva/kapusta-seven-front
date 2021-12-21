import React from 'react';
import { Typography } from '@mui/material';
import s from './reportList.module.css';
import formatterForAmount from '../../helpers/formatterForAmount';

const CategoriesItem = ({
  category,
  numberOfCategory,
  amount,
  Icon,
  handleClick,
}) => {
  const formattedAmount = formatterForAmount(amount);

  return (
    <li
      tabIndex={1}
      style={{ maxWidth: '90px', align: 'center' }}
      onClick={handleClick}
      title={numberOfCategory}
    >
      <Typography variant="body" fontSize={12} color={'#52555F'}>
        <p style={{ paddingTop: '5px', textAlign: 'center' }}>
          {formattedAmount}
        </p>
      </Typography>
      <div className={s.iconWrap}>
        <div className={s.iconEllipse}>{Icon}</div>
      </div>
      <Typography
        variant="body"
        fontSize={12}
        color={'#52555F'}
        transform={'uppercase'}
      >
        <p
          style={{
            textTransform: 'uppercase',
            paddingTop: '5px',
            textAlign: 'center',
          }}
        >
          {category}
        </p>
      </Typography>
    </li>
  );
};

export default CategoriesItem;
