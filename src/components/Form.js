import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ 
  currencies, setCurrencies,
  currencyName, setCurrencyName,
  currencyRate, setCurrencyRate
 }) => {
  const currencyNameHandler = (e) => {
    setCurrencyName(e.target.value);
  }
  const currencyRateHandler = (e) => {
    setCurrencyRate(e.target.value);
  }
  const submitCurrencyHandler = (e) => {
    e.preventDefault();
    setCurrencies(
      [...currencies, {
        currency_name: currencyName, 
        currency_rate: currencyRate, 
        checked: false, 
        id: uuidv4()
      }])
      setCurrencyName('');
      setCurrencyRate('');
  }

  return (
    <form>
      <input value={currencyName} onChange= {currencyNameHandler} type="text" className="currency-input" placeholder='currency name'/>
      <input value={currencyRate} onChange= {currencyRateHandler} type="text" className="currency-input" placeholder='currency rate'/>
    
      <button className="currency-button" type="submit" onClick={submitCurrencyHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    );
}

export default Form;