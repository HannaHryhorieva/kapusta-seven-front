export default function getDataForReportChart(transactions) {
  const diagramItems = [
    ...new Set(transactions.map(transaction => transaction.description)),
  ];

  const total = [];
  total.length = diagramItems.length;
  total.fill(0);
  const items = [];
  transactions.map(transaction => {
    return diagramItems.forEach((diagramItem, index) => {
      if (transaction.description !== diagramItem) {
        return;
      }
      return (total[index] = total[index] + transaction.amount);
    });
  });

  diagramItems.forEach((diagramItem, index) => {
    items.push({ name: diagramItem, sum: total[index] });
  });
  return items;
}
