import React, { useState } from 'react'
import Form from './Form'
import CurrencyList from './CurrenncyList'

const CurrencyExchangeApp = () => {
  const [currencyName, setCurrencyName] = useState("");
  const [currencyRate, setCurrencyRate] = useState("");

  const [currencies, setCurrencies] = useState([]);
  
  return (
    <div className='App'>
      <header>
        <h1>Currency Exchange App</h1>
      </header>
    
      <Form 
      currencies={currencies} 
      setCurrencies={setCurrencies} 
      currencyName={currencyName}
      currencyRate={currencyRate}
      setCurrencyName={setCurrencyName}
      setCurrencyRate={setCurrencyRate}
      />
      <CurrencyList currencies={currencies} />
    </div>

  );
}

export default CurrencyExchangeApp;