import React, { useState } from 'react'
import Form from './Form'
import CurrencyList from './CurrenncyList'

const CurrencyExchangeApp = () => {
  const [inputText, setInputText] = useState("");

  
  return (
    <div className='App'>
      <header>
        <h1>Currency Exchange App</h1>
      </header>
    
      <Form setInputText={setInputText}/>
      <CurrencyList />
    </div>

  );
}

export default CurrencyExchangeApp;