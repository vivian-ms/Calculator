import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Input from './components/Input';
import Formula from './components/Formula';
import Answer from './components/Answer';

const App = () => {
  const [input, setInput] = useState('');
  const [formula, setFormula] = useState('');
  const [answer, setAnswer] = useState('');

  const calc = (action, x = "") => {
    switch (action) {
      case "UPDATE_INPUT":
        if (x === "clear") {
          setInput("");
        } else {
          setInput(input + x);
        }
        break;

      case "UPDATE_FORMULA":
        if (x === "clear") {
          setFormula("");
        } else {
          /* ################################################## */
          /* #### If formula is empty or ends with a number and an operator is pressed #### */
          /* ################################################## */

              // If operator is pressed before any number is pressed, formula starts with 0
          if (!input && !formula && !answer) {
            setFormula(`0 ${x}`);

              // If a previous calculation was perfomed, add operator to the result
          } else if (!formula && answer) {
            setFormula(`${answer} ${x}`);
            setAnswer("");

              // Else add input number and operator to formula
          } else if (input) {
            setFormula(`${formula} ${input} ${x}`);
            setInput("");
          }

          /* ################################################## */
          /* ####### If formula ends with an operator and an operator is pressed ####### */
          /* ################################################## */
          if (!input && /[+*/-]/.test(formula[formula.length - 1])) {
                  // If new operator is -, append - after existing operator
            if (x === "-" && /\d/.test(formula[formula.length - 3])) {
              setFormula(`${formula} ${x}`);

                  // If formula ends with - and new operator isn't -, replace existing operator
            } else if (/-/.test(formula[formula.length - 1]) && /[+*/]/.test(x)) {
              setFormula(`${formula.substring(0, formula.length - 3).trim()} ${x}`);

                  // If new operator isn't -, replace existing operator
            } else {
              setFormula(`${formula.substring(0, formula.length - 1).trim()} ${x}`);
            }
          }
        }
        break;

      case "UPDATE_ANSWER":
        if (x === "clear") {
          setAnswer("");
        } else {
              // If there's input, add input to formula and solve
          if (input) {
            setAnswer(eval(`${formula} ${input}`));
          }

              // If there's a formula but no input, remove the operator and solve the formula
          if (formula && !input) {
            setAnswer(eval(`${formula.substring(0, formula.length - 1).trim()}`));
          }

          setInput("");
          setFormula("");
        }
        break;

        // No default
    }
  };

  return (
    <div className="container">
      <div id="display">
        { !answer && <Formula formula={formula} /> }
        { !answer && <Input input={input} formula={formula} answer={answer} /> }
        <Answer answer={answer} />
      </div>
      <Buttons input={input} answer={answer} calc={calc} />
    </div>
  );
};

export default App;
