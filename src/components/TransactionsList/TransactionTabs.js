import { Box, Paper, Tab } from '@mui/material';
import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import Summary from '../Summary/Summary';
import Transaction from '../TransactionForm/Transaction';
import TransactionTable from './TransactionTable';
import incomeCategories from '../TransactionForm/incomeCategories.json';
import { incomeToBalance } from '../../redux/balance/balance-actions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function TransactionTabs({ deleteDialogHandler }) {
  const [value, setValue] = useState('expense');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down('desktop'));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsStyle = {
    '& .MuiButtonBase-root': {
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: '#FAFBFD',
      color: '#000',
      border: 'none',
    },
    '& .MuiTab-root.Mui-selected': {
      backgroundColor: '#FEFEFE',
      color: '#FF751D',
      border: 'none',
    },
  };

  const paperStyle = {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
    p: '30px 20px 60px',
  };

  const tableBox = {};
  if (!isDesktop) {
    tableBox.display = 'flex';
  }

  return (
    <Box>
      <TabContext value={value}>
        <TabList
          TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
          onChange={handleChange}
          sx={tabsStyle}
        >
          <Tab label="Расходы" value="expense" />
          <Tab label="Доходы" value="income" />
        </TabList>
        <Paper sx={paperStyle}>
          <TabPanel value="expense" sx={{ padding: 0 }}>
            <Transaction />
            <div style={tableBox}>
              <TransactionTable
                type="expense"
                deleteDialogHandler={deleteDialogHandler}
              />
              <Summary value={value} />
            </div>
          </TabPanel>
          <TabPanel value="income" sx={{ padding: 0 }}>
            <Transaction
              isIncome="true"
              categories={incomeCategories}
              toBalance={() => incomeToBalance()}
              placeholder="Описание дохода"
              selectLabel="Категория дохода"
            />
            <div style={tableBox}>
              <TransactionTable
                type="income"
                deleteDialogHandler={deleteDialogHandler}
              />
              <Summary value={value} />
            </div>
          </TabPanel>
        </Paper>
      </TabContext>
    </Box>
  );
}

export default TransactionTabs;
