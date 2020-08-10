import React from 'react';

const Buttons = ({ input, updateInput }) => {
  const handleClick = evt => {
    if (evt.target.classList.contains('number') && ((evt.target.id === 'zero' && input) || evt.target.id !== 'zero')) {
      updateInput(evt.target.value);
    }
  };

  return (
    <div id="calculator">
      <button type="button" id="zero" className="number btn btn-outline-dark" value="0" onClick={handleClick}>0</button>
      <button type="button" id="one" className="number btn btn-outline-dark" value="1" onClick={handleClick}>1</button>
      <button type="button" id="two" className="number btn btn-outline-dark" value="2" onClick={handleClick}>2</button>
      <button type="button" id="three" className="number btn btn-outline-dark" value="3" onClick={handleClick}>3</button>
      <button type="button" id="four" className="number btn btn-outline-dark" value="4" onClick={handleClick}>4</button>
      <button type="button" id="five" className="number btn btn-outline-dark" value="5" onClick={handleClick}>5</button>
      <button type="button" id="six" className="number btn btn-outline-dark" value="6" onClick={handleClick}>6</button>
      <button type="button" id="seven" className="number btn btn-outline-dark" value="7" onClick={handleClick}>7</button>
      <button type="button" id="eight" className="number btn btn-outline-dark" value="8" onClick={handleClick}>8</button>
      <button type="button" id="nine" className="number btn btn-outline-dark" value="9" onClick={handleClick}>9</button>
      <button type="button" id="decimal" className="btn btn-outline-dark" value="." onClick={handleClick}>.</button>
      <button type="button" id="add" className="operator btn btn-outline-dark" value="+" onClick={handleClick}>+</button>
      <button type="button" id="subtract" className="operator btn btn-outline-dark" value="-" onClick={handleClick}>-</button>
      <button type="button" id="multiply" className="operator btn btn-outline-dark" value="*" onClick={handleClick}>*</button>
      <button type="button" id="divide" className="operator btn btn-outline-dark" value="/" onClick={handleClick}>/</button>
      <button type="button" id="equals" className="btn btn-outline-dark" onClick={handleClick}>=</button>
      <button type="button" id="clear" className="btn btn-outline-dark" onClick={handleClick}>C</button>
    </div>
  );
};

export default Buttons;
