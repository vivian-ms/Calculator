import React from 'react';

const Answer = ({ answer }) => {
  return (
    <div id="answer">
      {answer ? answer : null}
    </div>
  );
};

export default Answer;
