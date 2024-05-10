import React, { useState, useEffect, useRef } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import Result from './Result';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const answerInputRef = useRef(null);

  useEffect(() => {
    setQuestions([
      { question: "Vad är huvudstaden i Frankrike?", correctAnswer: "Paris" },
      { question: "Vad är huvudstaden i Spanien?", correctAnswer: "Madrid" },
      { question: "Vad är huvudstaden i Sverige?", correctAnswer: "Stockholm" },
    ]);
  }, []);

  
  const handleAnswerSubmit = (event) => {
    event.preventDefault(); 
    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].correctAnswer.toLowerCase()) {
      setScore(score + 1);
    }
    setUserAnswer('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    answerInputRef.current && answerInputRef.current.focus();
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswer('');
  };

  if (currentQuestionIndex >= questions.length) {
    return <Result score={score} totalQuestions={questions.length} onRestart={restartQuiz} />;
  }

  return (
    <div>
      <Question question={questions[currentQuestionIndex].question} />
      <form onSubmit={handleAnswerSubmit}>
        <input 
          ref={answerInputRef}
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          type="text" 
          placeholder="Ditt svar" 
        />
        <button type="submit">Nästa</button>
        <ScoreBoard score={score} totalQuestions={questions.length} />
      </form>
    </div>
  );
};

export default Quiz;
