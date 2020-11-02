import React from 'react';

const Input = ({ input, formula }) => {
  return (
    <div id="input">
      {/* If input exists, show input */}
      {/* If input doesn't exist & formula doesn't exist: show zero in input */}
      {/* If input doesn't exist & formula exists:         show nothing */}
      {input ? input : !formula ? '0' : null}
    </div>
  );
};

export default Input;
