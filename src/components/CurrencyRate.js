import React from 'react'

const CurrencyRate = ({currency, name, rate, currencies, setCurrencies}) => {
    
    const deleteHandler = () => {
        // console.log(currency);
        setCurrencies(currencies.filter( el => el.id !== currency.id))
    }

    const checkHandler = () => {
        setCurrencies(currencies.map((item) => {
            if(item.id === currency.id) {
                return {
                    ...item, checked: !item.checked
                }
            }
            return item;
        }))
    }

    return (
        <div className='currency'>
            <li className= {`currency-item ${currency.checked ? "checked" : "" }`}>{name} {rate}</li>
            <button onClick={checkHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}
export default CurrencyRate;