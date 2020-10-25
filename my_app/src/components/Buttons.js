import React, { useEffect } from 'react';

const Buttons = ({ input, answer, calc }) => {
  const handleClick = evt => {
      // Number pressed
    if (evt.target.classList.contains('number')) {
        // Replace zero if it's the first digit
      if (input === '0') {
        calc('ADD_INPUT', evt.target.value);
      } else {
      calc('UPDATE_INPUT', evt.target.value);
      }

      // Decimal pressed
    } else if (evt.target.id === 'decimal') {
        // If no input, add zero in front of decimal
      if (!input) {
        calc('UPDATE_INPUT', `0${evt.target.value}`);

        // Only allow one decimal
      } else if (!/\./.test(input)) {
        calc('UPDATE_INPUT', evt.target.value);
      }

      // Operator pressed
    } else if (evt.target.classList.contains('operator')) {
      calc('UPDATE_FORMULA', evt.target.value);

      // Clear button pressed
    } else if (evt.target.id === 'clear') {
      calc('UPDATE_INPUT', 'clear');
      calc('UPDATE_FORMULA', 'clear');
      calc('UPDATE_ANSWER', 'clear');

      // Equal button pressed
    } else if (evt.target.id === 'equals') {
      calc('UPDATE_ANSWER');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', evt => {
      let key;

      switch (evt.key) {
        case '0':
          key = document.querySelector('#zero');
          break;
        case '1':
          key = document.querySelector('#one');
          break;
        case '2':
          key = document.querySelector('#two');
          break;
        case '3':
          key = document.querySelector('#three');
          break;
        case '4':
          key = document.querySelector('#four');
          break;
        case '5':
          key = document.querySelector('#five');
          break;
        case '6':
          key = document.querySelector('#six');
          break;
        case '7':
          key = document.querySelector('#seven');
          break;
        case '8':
          key = document.querySelector('#eight');
          break;
        case '9':
          key = document.querySelector('#nine');
          break;
        case '.':
          key = document.querySelector('#decimal');
          break;
        case '+':
          key = document.querySelector('#add');
          break;
        case '-':
          key = document.querySelector('#subtract');
          break;
        case '*':
          key = document.querySelector('#multiply');
          break;
        case '/':
          evt.preventDefault();
          key = document.querySelector('#divide');
          break;
        case 'Enter':
          key = document.querySelector('#equals');
          break;
        case 'Backspace':
          key = document.querySelector('#clear');
          break;
        default:
          break;
      }  // End switch

      if (key) {
        key.click();

            // Add and remove .active to pressed button
        key.classList.add('active');
        key.setAttribute('style', 'box-shadow: none');

        setTimeout(() => {
          key.classList.remove('active');
          key.removeAttribute('style');
        }, 200);
      }  // End if
    });  // End keydown event
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
