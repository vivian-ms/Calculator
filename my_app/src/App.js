import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Input from './components/Input';

const App = () => {
  const [input, setInput] = useState('');

  const updateInput = n => {
    setInput(input + n);
  };

  return (
    <div className="container">
      <Input input={input} />
      <Buttons input={input} updateInput={updateInput} />
    </div>
  );
};

export default App;
