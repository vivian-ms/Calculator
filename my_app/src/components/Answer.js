import React from 'react';

const Answer = ({ answer }) => {
  return (
    <div id="answer" className="position-relative down">
      {answer ? answer : null}
    </div>
  );
};

export default Answer;
