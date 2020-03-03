import React from 'react';
import './App.css';
import AddItem from './components/AddItem'
import GlobalContext from './context/GlobalContext';
import AppTitle from './components/AppTitle';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';

function App() {
  return (
    <GlobalContext>
      <AppTitle />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <History />
        <AddItem /> 
    </div>

    </GlobalContext>
  );
}

export default App;
