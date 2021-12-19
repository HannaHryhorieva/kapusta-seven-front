import BtnGoToMain  from '../BtnGoToMain/BtnGoToMain'
import Transaction from './Transaction'
import incomeCategories from './incomeCategories.json'
import { incomeToBalance } from '../../redux/balance/balance-actions'


const FormIncomeForMob = () => { 
    return (<div style={{ marginTop: '15px' }}>
        <div className="background-top background-top_for-mobile"></div>
        <BtnGoToMain />
        <Transaction
            isIncome={true}
            categories={incomeCategories}
            toBalance={incomeToBalance()}
            placeholder='Описание дохода'
            selectLabel='Категория дохода'
        />
        </div>
    )
}
export default FormIncomeForMob
