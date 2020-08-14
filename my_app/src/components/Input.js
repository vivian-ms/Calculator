import React from 'react';

const Input = ({ input, formula }) => {
  return (
    <div id="input">
      {/* If input exists: show input */}
      {/* If input doesn't exist: if formula doesn't exist show zero in input; if formula exists show nothing in input */}
      {input ? input : !formula ? '0' : null}
    </div>
  );
};

export default Input;
