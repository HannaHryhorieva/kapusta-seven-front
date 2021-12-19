import BtnGoToMain from '../BtnGoToMain/BtnGoToMain'
import Transaction from './Transaction'

const FormExpenseForMob = () => { 
    return (<div style={{marginTop: '15px'}}>
      <div className="background-top background-top_for-mobile"></div>
        <BtnGoToMain />
        <Transaction/>
        </div>
    )
}
export default FormExpenseForMob


