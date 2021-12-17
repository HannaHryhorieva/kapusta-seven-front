import React from 'react';
import { Typography, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import CategoriesItem from './CategoriesItem';
import s from './reportList.module.css';
import categoryIcons from '../../data/categoriesIcon';
import { ReactComponent as ArrowLeft } from '../../images/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../images/icons/arrow-right.svg';

const paperStyles = {
  maxWidth: '1060px',
  padding: '20px 0 30px 0',
  borderRadius: '30px',
  borderShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
  backgroundColor: '#FFFFFF',
  margin: '40px 0',
};

const CategoriesList = ({ type, onClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  const categories =
    type === 'expense' ? categoryIcons.expense : categoryIcons.income;
  return (
    <>
      {!isMobile ? (
        <Paper sx={paperStyles}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ArrowLeft height={15} width={15} onClick={onClick} />
              <Typography variant="h2">
                {type === 'expense' ? (
                  <p style={{ textTransform: 'uppercase', padding: '0 15px' }}>
                    расходы
                  </p>
                ) : (
                  <p style={{ textTransform: 'uppercase', padding: '0 15px' }}>
                    доходы
                  </p>
                )}
              </Typography>
              <ArrowRight height={15} width={15} onClick={onClick} />
            </div>
            <ul className={isMobile ? s.expenseListMobile : s.expenseList}>
              {categories.map(icon => (
                <CategoriesItem
                  category={'gdfhfgh'}
                  amount={63854}
                  Icon={icon}
                />
              ))}
            </ul>
          </div>
        </Paper>
      ) : (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArrowLeft height={15} width={15} onClick={onClick} />
            <Typography variant="h2">
              <p style={{ textTransform: 'uppercase', padding: '0 15px' }}>
                Расходы
              </p>
            </Typography>
            <ArrowRight height={15} width={15} onClick={onClick} />
          </div>
          <ul className={isMobile ? s.expenseListMobile : s.expenseList}>
            {categories.map(icon => (
              <CategoriesItem category={'gdfhfgh'} amount={63854} Icon={icon} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CategoriesList;
