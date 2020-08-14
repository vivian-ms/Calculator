import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Input from './components/Input';

const App = () => {
  const [input, setInput] = useState('');
  const [formula, setFormula] = useState('');

  const updateInput = n => {
    setInput(input + n);
  };

  const updateFormula = f => {
    /* ################################################## */
    /* #### If formula is empty or ends with a number and an operator is pressed #### */
    /* ################################################## */

      // If operator is pressed before any number is pressed, formula starts with 0
    if (!input && !formula) {
      setFormula(`0 ${f}`);

      // Else add input number and operator to formula
    } else if (input) {
      setFormula(`${formula} ${input} ${f}`);
      setInput('');
    }


    /* ################################################## */
    /* ####### If formula ends with an operator and an operator is pressed ####### */
    /* ################################################## */
    if (!input && /[+*/-]/.test(formula[formula.length - 1])) {
      // If new operator is -, append - after existing operator
      if (f === '-' && /\d/.test(formula[formula.length - 3])) {
        setFormula(`${formula} ${f}`);

        // If formula ends with - and new operator isn't -, replace existing operator
      } else if (/-/.test(formula[formula.length - 1]) && /[+*/]/.test(f)) {
        setFormula(`${formula.substring(0, formula.length - 3).trim()} ${f}`);

        // If new operator isn't -, replace existing operator
      } else {
        setFormula(`${formula.substring(0, formula.length - 1).trim()} ${f}`);
      }
    }
  };

  return (
    <div className="container">
      <Input input={input} />
      <Buttons input={input} updateInput={updateInput} formula={formula} updateFormula={updateFormula} />
    </div>
  );
};

export default App;
