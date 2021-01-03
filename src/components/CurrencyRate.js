import React from 'react'

const CurrencyRate = ({name, rate, id}) => {
    return (
        <div className='currency'>
            <li className= 'currency-item'>{name} {rate}</li>
            <button className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}
export default CurrencyRate;