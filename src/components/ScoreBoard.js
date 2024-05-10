import React from 'react';

const ScoreBoard = ({ score, totalQuestions }) => {
  return <div>Poäng: {score} av {totalQuestions}</div>;
};

export default ScoreBoard;