import React from 'react';

const Input = ({ input, formula }) => {
  return (
      // If formula doesn't exist, add .down to shift input down; otherwise, remove .down
    <div id="input" className={`position-relative ${!formula ? "down" : ""}`}>
      {/* If input exists, show input */}
      {/* If input doesn't exist & formula doesn't exist, show zero in input */}
      {/* If input doesn't exist & formula exists, show nothing */}
      {input ? input : !formula ? '0' : null}
    </div>
  );
};

export default Input;
