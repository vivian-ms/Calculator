import React from 'react';

const Formula = ({ formula }) => {
  return (
    <div id="formula" className="position-relative">
      {/* Show arrows to scroll if formula is longer than 25 digits */}
      { formula.length > 25 && <><i className="fas fa-angle-left position-absolute"></i><i className="fas fa-angle-right position-absolute"></i></> }
      { formula ? <p className={`${formula.length > 25 ? "pl-2 pr-3" : ""}`}> {formula} </p> : null }
    </div>
  );
};

export default Formula;
