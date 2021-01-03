import React from 'react'

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  return (
    <form>
      <input onChange= {inputTextHandler} type="text" className="currency-input" />
      <button className="currency-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    );
}

export default Form;