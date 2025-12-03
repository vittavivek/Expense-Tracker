import './App.css';
import  Header  from './components/Header';
import  Balance  from './components/Balance.js';
import  IncomeExpenses  from './components/IncomeExpenses.js';
import  TransactionList  from './components/TransactionList.js';
import  AddTransaction  from './components/AddTransaction.js';

import { GlobalProvider } from './context/GlobalState.js';
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
