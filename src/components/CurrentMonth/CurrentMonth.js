import React from 'react';
import { Typography } from '@mui/material';

import { ReactComponent as ArrowLeft } from '../../images/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../images/icons/arrow-right.svg';
import months from '../../data/month';

const CurrentMonth = ({
  month,
  year,
  onHandleClickRight,
  onHandleClickLeft,
}) => {
  const currentMonth = months.find(item => item.id === month);
  return (
    <div style={{ maxWidth: '200px' }}>
      <p style={{ textAlign: 'center', fontSize: '12px', marginBottom: '7px' }}>
        Текущий период:
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ArrowLeft height={15} width={15} onClick={onHandleClickLeft} />
        <Typography variant="h2">
          <p style={{ textTransform: 'uppercase', padding: '0 10px' }}>
            {currentMonth.name} {year}
          </p>
        </Typography>
        <ArrowRight height={15} width={15} onClick={onHandleClickRight} />
      </div>
    </div>
  );
};

export default CurrentMonth;
