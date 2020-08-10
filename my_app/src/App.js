import React, { useState } from 'react';
import Buttons from './components/Buttons';

const App = () => {
  const [input, setInput] = useState('');

  const updateInput = n => {
    setInput(input + n);
  };

  return (
    <div className="container">
      <Buttons input={input} updateInput={updateInput} />
    </div>
  );
};

export default App;
