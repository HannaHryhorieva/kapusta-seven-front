import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
//todo remove after adding login functionality
axios.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmJhNTUyYWUwNDJlNGIxNWIwZThjMyIsImlhdCI6MTYzOTg5OTc4MiwiZXhwIjoxNjM5OTA2OTgyfQ.5H72eSuKU0GMdqW556T4FH1hISdH6onuX040u3Eeg64`;

// /api/transactions

export async function allTransactions() {
  const { data } = await axios.get(`/api/transactions/`);
  return data;
}
export async function allTransactionsByYear(year) {
  const { data } = await axios.get(`/api/transactions/byYear/${year}`);
  return data;
}

export async function allTransactionsByCategory({ year, month }) {
  const { data } = await axios.get(
    `/api/transactions/byCategory/${year}/${month}`,
  );
  return data;
}

export async function allTransactionsByMonth({ year, month }) {
  const { data } = await axios.get(
    `/api/transactions/byMonth/${year}/${month}`,
  );
  return data.data;
}

export async function addTransaction(transaction) {
  const { data } = await axios.post(`/api/transactions/`, transaction);
  return data;
}
export async function deleteTransaction(idTransaction) {
  const { data } = await axios.delete(`/api/transactions/${idTransaction}`);
  return data;
}
