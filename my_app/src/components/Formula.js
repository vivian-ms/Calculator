import React from 'react';

const Formula = ({ formula }) => {
  const scrollLeft = () => {
    document.querySelector('#formula').scrollLeft -= 30;
  }

  const scrollRight = () => {
    document.querySelector('#formula').scrollLeft += 30;
  }

  return (
    <div id="formula-container" className="position-relative">
      {/* Show arrows to scroll if formula > 25 digits */}
      { formula.length > 25 &&
        <>
          <i className="fas fa-angle-left position-fixed" onClick={scrollLeft}></i>
          <i className="fas fa-angle-right position-fixed" onClick={scrollRight}></i>
        </>
      }

      {/* Add left/right margin if formula > 25 digits */}
      { formula ?
        <div id="formula" className={`${formula.length > 25 ? "ml-2 mr-3" : ""}`}>
          <p>{formula}</p>
        </div> : null }
    </div>
  );
};

export default Formula;
