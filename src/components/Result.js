import React from 'react';

const Result = ({ score, totalQuestions, onRestart }) => {
  return (
    <div>
      <h2>Ditt resultat: {score} av {totalQuestions}</h2>
      <button onClick={onRestart}>Börja om</button>
    </div>
  );
};

export default Result;