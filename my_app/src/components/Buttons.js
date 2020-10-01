import React, { useEffect } from 'react';

const Buttons = ({ input, answer, calc }) => {
  const handleClick = evt => {
      // Number pressed; prevent zero as first digit
    if (evt.target.classList.contains('number') && ((evt.target.id === 'zero' && input) || evt.target.id !== 'zero')) {
      calc("UPDATE_INPUT", evt.target.value);

      // Decimal pressed
    } else if (evt.target.id === 'decimal') {
        // If no input, add zero in front of decimal
      if (!input) {
        calc("UPDATE_INPUT", `0${evt.target.value}`);

        // Only allow one decimal
      } else if (!/\./.test(input)) {
        calc("UPDATE_INPUT", evt.target.value);
      }

      // Operator pressed
    } else if (evt.target.classList.contains('operator')) {
      calc("UPDATE_FORMULA", evt.target.value);

      // Clear button pressed
    } else if (evt.target.id === 'clear') {
      calc("UPDATE_INPUT", "clear");
      calc("UPDATE_FORMULA", "clear");
      calc("UPDATE_ANSWER", "clear");

      // Equal button pressed
    } else if (evt.target.id === 'equals') {
      calc("UPDATE_ANSWER");
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', evt => {
      switch (evt.key) {
        case '0':
          document.querySelector('#zero').click();
          break;
        case '1':
          document.querySelector('#one').click();
          break;
        case '2':
          document.querySelector('#two').click();
          break;
        case '3':
          document.querySelector('#three').click();
          break;
        case '4':
          document.querySelector('#four').click();
          break;
        case '5':
          document.querySelector('#five').click();
          break;
        case '6':
          document.querySelector('#six').click();
          break;
        case '7':
          document.querySelector('#seven').click();
          break;
        case '8':
          document.querySelector('#eight').click();
          break;
        case '9':
          document.querySelector('#nine').click();
          break;
        case '.':
          document.querySelector('#decimal').click();
          break;
        case '+':
          document.querySelector('#add').click();
          break;
        case '-':
          document.querySelector('#subtract').click();
          break;
        case '*':
          document.querySelector('#multiply').click();
          break;
        case '/':
          evt.preventDefault();
          document.querySelector('#divide').click();
          break;
        case 'Enter':
          document.querySelector('#equals').click();
          break;
        case 'Backspace':
          document.querySelector('#clear').click();
          break;
        default:
          break;
      }
    });
  }, []);  // End useEffect

  return (
    <div id="buttons" className="mt-2">
      <button type="button" id="zero" className="number btn btn-dark" value="0" onClick={handleClick}>0</button>
      <button type="button" id="one" className="number btn btn-dark" value="1" onClick={handleClick}>1</button>
      <button type="button" id="two" className="number btn btn-dark" value="2" onClick={handleClick}>2</button>
      <button type="button" id="three" className="number btn btn-dark" value="3" onClick={handleClick}>3</button>
      <button type="button" id="four" className="number btn btn-dark" value="4" onClick={handleClick}>4</button>
      <button type="button" id="five" className="number btn btn-dark" value="5" onClick={handleClick}>5</button>
      <button type="button" id="six" className="number btn btn-dark" value="6" onClick={handleClick}>6</button>
      <button type="button" id="seven" className="number btn btn-dark" value="7" onClick={handleClick}>7</button>
      <button type="button" id="eight" className="number btn btn-dark" value="8" onClick={handleClick}>8</button>
      <button type="button" id="nine" className="number btn btn-dark" value="9" onClick={handleClick}>9</button>
      <button type="button" id="decimal" className="btn btn-dark" value="." onClick={handleClick}>.</button>
      <button type="button" id="add" className="operator btn btn-secondary" value="+" onClick={handleClick}>+</button>
      <button type="button" id="subtract" className="operator btn btn-secondary" value="-" onClick={handleClick}>-</button>
      <button type="button" id="multiply" className="operator btn btn-secondary" value="*" onClick={handleClick}>*</button>
      <button type="button" id="divide" className="operator btn btn-secondary" value="/" onClick={handleClick}>/</button>
      <button type="button" id="equals" className="btn btn-primary" onClick={handleClick}>=</button>
      <button type="button" id="clear" className="btn btn-danger" onClick={handleClick}>C</button>
    </div>
  );
};

export default Buttons;
