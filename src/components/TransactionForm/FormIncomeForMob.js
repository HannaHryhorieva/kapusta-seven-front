import BtnGoToMain from '../BtnGoToMain/BtnGoToMain';
import Transaction from './Transaction';
import incomeCategories from './incomeCategories.json';

const FormIncomeForMob = () => {
  return (
    <div style={{ marginTop: '15px' }}>
      <div className="background-top background-top_for-mobile"></div>
      <BtnGoToMain />
      <Transaction
        isIncome={true}
        categories={incomeCategories}
        placeholder="Описание дохода"
      />
    </div>
  );
};
export default FormIncomeForMob;
