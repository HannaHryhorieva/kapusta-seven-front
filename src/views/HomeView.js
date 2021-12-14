import React from 'react';
import TransactionList from './../components/TransactionsList/TransactionList';
import TransactionTabs from './../components/TransactionsList/TransactionTabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function HomeView() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  return <>{isMobile ? <TransactionList /> : <TransactionTabs />}</>;
}

export default HomeView;
