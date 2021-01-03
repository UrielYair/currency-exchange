import React from "react";
import CurrencyRate from "./CurrencyRate";

const CurrencyList = ({ currencies, setCurrencies, filteredCurrencies}) => {
    return (
        <div className="currency-container">
            <ul className="currency-list">
                {filteredCurrencies.map(currency => (
                    <CurrencyRate 
                    name={currency.currency_name} 
                    rate={currency.currency_rate} 
                    key={currency.id}
                    currency={currency}
                    currencies={currencies} 
                    setCurrencies={setCurrencies}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CurrencyList;