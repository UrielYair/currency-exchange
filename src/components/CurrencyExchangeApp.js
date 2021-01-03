import React, { useState, useEffect } from 'react'
import Form from './Form'
import CurrencyList from './CurrenncyList'

const CurrencyExchangeApp = () => {
  const [currencyName, setCurrencyName] = useState("");
  const [currencyRate, setCurrencyRate] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);

  useEffect(() => {
    // filterHandler
    switch (filter) {
      case 'checked':
        setFilteredCurrencies(currencies.filter(currency => currency.checked === true));
        break;
      case 'unchecked':
        setFilteredCurrencies(currencies.filter(currency => currency.checked === false));
        break;
      default:
        setFilteredCurrencies(currencies);
    }
  }, [currencies, filter]);
  
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
      setFilter={setFilter}
      />

      <CurrencyList 
      currencies={currencies} 
      setCurrencies={setCurrencies} 
      filteredCurrencies={filteredCurrencies}/>
    </div>

  );
}

export default CurrencyExchangeApp;