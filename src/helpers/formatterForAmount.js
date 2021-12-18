const formatterForAmount = amount => {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });

  return formatter.format(amount);
};

export default formatterForAmount;
