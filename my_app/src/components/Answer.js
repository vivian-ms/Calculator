import React from 'react';

const Answer = ({ answer }) => {
  return (
    <div id="answer" className="position-relative down">
      {/* If answer > 10 digits, show answer in exponential notation */}
      { !answer ?
      null : answer.toString().length > 10 ?
        answer.toExponential(5) : answer }
    </div>
  );
};

export default Answer;
