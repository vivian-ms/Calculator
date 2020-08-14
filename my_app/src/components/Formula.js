import React from 'react';

const Formula = ({ formula }) => {
  return (
    <div id="formula">
      {formula ? formula : null}
    </div>
  );
};

export default Formula;
