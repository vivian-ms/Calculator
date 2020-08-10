import React from 'react';

const Buttons = () => {
  return (
    <div id="calculator">
      <button type="button" id="zero" className="number btn btn-outline-dark" value="0">0</button>
      <button type="button" id="one" className="number btn btn-outline-dark" value="1">1</button>
      <button type="button" id="two" className="number btn btn-outline-dark" value="2">2</button>
      <button type="button" id="three" className="number btn btn-outline-dark" value="3">3</button>
      <button type="button" id="four" className="number btn btn-outline-dark" value="4">4</button>
      <button type="button" id="five" className="number btn btn-outline-dark" value="5">5</button>
      <button type="button" id="six" className="number btn btn-outline-dark" value="6">6</button>
      <button type="button" id="seven" className="number btn btn-outline-dark" value="7">7</button>
      <button type="button" id="eight" className="number btn btn-outline-dark" value="8">8</button>
      <button type="button" id="nine" className="number btn btn-outline-dark" value="9">9</button>
      <button type="button" id="decimal" className="btn btn-outline-dark" value=".">.</button>
      <button type="button" id="add" className="operator btn btn-outline-dark" value="+">+</button>
      <button type="button" id="subtract" className="operator btn btn-outline-dark" value="-">-</button>
      <button type="button" id="multiply" className="operator btn btn-outline-dark" value="*">*</button>
      <button type="button" id="divide" className="operator btn btn-outline-dark" value="/">/</button>
      <button type="button" id="equals" className="btn btn-outline-dark">=</button>
      <button type="button" id="clear" className="btn btn-outline-dark">C</button>
    </div>
  );
};

export default Buttons;
