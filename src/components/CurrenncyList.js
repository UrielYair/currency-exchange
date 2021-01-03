import React from "react";
import CurrencyRate from "./CurrencyRate";

const CurrencyList = ({ currencies }) => {
    return (
        <div className="currency-container">
            <ul className="currency-list">
                {currencies.map(currency => (
                    <CurrencyRate 
                    name={currency.currency_name} 
                    rate={currency.currency_rate} 
                    key={currency.id}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CurrencyList;