import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import getRates from '../api';

const Form = ({ 
  currencies, setCurrencies,
  currencyName, setCurrencyName,
  currencyRate, setCurrencyRate,
  setFilter
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

  const filterSelectHandler = (e) => {
    setFilter(e.target.value);
  }

  const getRatesFromAPI = () => {
    //api
    let res = getRates();
    res.then(response => {
      setCurrencies(response);
    })
  }

  return (
    <form>
      <input value={currencyName} onChange= {currencyNameHandler} type="text" className="currency-input" placeholder='currency name'/>
      <input value={currencyRate} onChange= {currencyRateHandler} type="text" className="currency-input" placeholder='currency rate'/>
    
      <button className="currency-button" type="submit" onClick={submitCurrencyHandler}>
        <i className="fas fa-plus-square"></i>
      </button>

      <button onClick={getRatesFromAPI} className='currency-button' >
        <i className="fas fa-history"></i>
      </button>

      <div className="select">
        <select name="currencies" className="filter-currency" onChange={filterSelectHandler}>
          <option value="all">All</option>
          <option value="checked">checked</option>
          <option value="unchecked">unchecked</option>
        </select>
      </div>
    </form>

    );
}

export default Form;