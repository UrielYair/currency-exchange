import React from "react";
import CurrencyRate from "./CurrencyRate";

const CurrencyList = () => {
    return (
        <div className="currency-container">
            <ul className="currency-list">
                <CurrencyRate />
            </ul>
        </div>
    );
}

export default CurrencyList;