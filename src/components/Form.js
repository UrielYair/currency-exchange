import React from 'react'

const Form = () => {
    return (
    <form>
      <input type="text" className="currency-input" />
      <button className="currency-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    );
}

export default Form;