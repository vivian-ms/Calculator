import React from 'react';

const Input = ({ input }) => {
  return (
    <div id="input">
      {input ? input : '0'}
    </div>
  );
};

export default Input;
