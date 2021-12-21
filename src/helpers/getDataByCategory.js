import categoryIcons from '../data/categoriesIcon';

const getDataByCategory = obj => {
  let arr = [];
  for (const key in obj) {
    let item = {};
    switch (key) {
      case 'Транспорт':
        item.icon = categoryIcons.expense[4];
        item.category = 'Транспорт';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Продукты':
        item.icon = categoryIcons.expense[0];
        item.category = 'Продукты';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Здоровье':
        item.icon = categoryIcons.expense[3];
        item.category = 'Здоровье';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Алкоголь':
        item.icon = categoryIcons.expense[1];
        item.category = 'Алкоголь';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Развлечения':
        item.icon = categoryIcons.expense[2];
        item.category = 'Развлечения';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Всё для дома':
        item.icon = categoryIcons.expense[5];
        item.category = 'Всё для дома';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Техника':
        item.icon = categoryIcons.expense[6];
        item.category = 'Техника';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Коммуналка, связь':
        item.icon = categoryIcons.expense[7];
        item.category = 'Коммуналка, связь';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Спорт, хобби':
        item.icon = categoryIcons.expense[8];
        item.category = 'Спорт, хобби';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Образование':
        item.icon = categoryIcons.expense[9];
        item.category = 'Образование';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Прочее':
        item.icon = categoryIcons.expense[10];
        item.category = 'Прочее';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'ЗП':
        item.icon = categoryIcons.income[0];
        item.category = 'ЗП';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      case 'Доп. доход':
        item.icon = categoryIcons.income[1];
        item.category = 'Доп. доход';
        item.amount = obj[key].total;
        arr.push(item);
        break;
      default:
        arr = [];
    }
  }
  return arr;
};

// const getDataByCategory = (type, obj) => {
//   let arr = [];
//   if (type === 'expense') {
//     for (const key in obj.expense) {
//       let item = {};
//       switch (key) {
//         case '0':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[4];
//           item.category = 'Транспорт';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '1':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[0];
//           item.category = 'Продукты';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '2':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[3];
//           item.category = 'Здоровье';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '3':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[1];
//           item.category = 'Алкоголь';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '4':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[2];
//           item.category = 'Развлечения';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '5':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[5];
//           item.category = 'Всё для дома';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '6':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[6];
//           item.category = 'Техника';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '7':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[7];
//           item.category = 'Коммуналка, связь';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '8':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[8];
//           item.category = 'Спорт, хобби';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '9':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[9];
//           item.category = 'Образование';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         case '10':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.expense[10];
//           item.category = 'Прочее';
//           item.amount = obj.expense[key].total;
//           arr.push(item);
//           break;
//         default:
//           arr = [];
//       }
//     }
//   }
//   if (type === 'income') {
//     for (const key in obj.income) {
//       let item = {};
//       switch (key) {
//         case '0':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.income[0];
//           item.category = 'ЗП';
//           item.amount = obj.income[key].total;
//           arr.push(item);
//           break;
//         case '1':
//           item.numberOfCategory = key;
//           item.icon = categoryIcons.income[1];
//           item.category = 'Доп. доход';
//           item.amount = obj.income[key].total;
//           arr.push(item);
//           break;
//         default:
//           arr = [];
//       }
//     }
//   }
//   return arr;
// };

export default getDataByCategory;
