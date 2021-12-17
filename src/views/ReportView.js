import React, { useState } from 'react';
import CategoriesList from '../components/ReportList/CategoriesList';
import ReportChart from '../components/ReportChart/ReportChart';

export default function ReportPage() {
  const [type, setType] = useState('expense');
  // const onHandleChangeTypeExpense = () => setType('expense');

  // const onHandleChangeTypeIncome = () => setType('income');

  const onHandleChangeType = () => {
    if (type === 'expense') {
      setType('income');
    }
    if (type === 'income') {
      setType('expense');
    }
  };

  return (
    <div>
      <CategoriesList type={type} onClick={() => onHandleChangeType()} />
      <ReportChart />
    </div>
  );
}
