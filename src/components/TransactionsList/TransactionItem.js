import { IconButton, Typography } from '@mui/material';

import { ReactComponent as DeleteIcon } from '../../images/icons/delete.svg';
import React from 'react';

function TransactionItem({ transaction }) {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });

  const amount = formatter.format(transaction.amount);

  return (
    <li
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        borderBottom: '1px solid #F5F6FB',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', flexGrow: 1 }}>
          <Typography variant="body1" fontWeight={700}>
            {transaction.description}
          </Typography>
          <Typography variant="body1" fontSize={8}>
            {transaction.date}
          </Typography>
        </div>
        <div style={{ minWidth: '10%', flexShrink: 1, alignSelf: 'flex-end' }}>
          <Typography variant="body1" fontSize={8}>
            {transaction.category}
          </Typography>
        </div>
        <div style={{ width: '36%', textAlign: 'right' }}>
          {transaction.isExpense ? (
            <Typography fontSize={14} color="#E7192E" fontWeight="700">
              - {amount}
            </Typography>
          ) : (
            <Typography fontSize={14} color="#407946" fontWeight="700">
              {amount}
            </Typography>
          )}
        </div>
        <div style={{ width: '10%', textAlign: 'center' }}>
          <IconButton aria-label="Удалить транзакцию" sx={{ p: '6px' }}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </li>
  );
}

export default TransactionItem;
