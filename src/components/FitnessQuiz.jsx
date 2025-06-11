// components/FitnessQuiz.jsx
import React, { useState } from 'react';
import './FitnessQuiz.css';

const quizData = [
  {
    question: "What is the recommended minimum number of steps per day for adults?",
    options: ["2,000", "5,000", "10,000", "15,000"],
    answer: "10,000",
  },
  {
    question: "Which macronutrient is most important for muscle growth?",
    options: ["Carbohydrates", "Protein", "Fat", "Vitamins"],
    answer: "Protein",
  },
  {
    question: "How many hours of sleep is recommended for recovery?",
    options: ["4–5", "6–7", "7–9", "10–12"],
    answer: "7–9",
  },
  {
    question: "Which of the following helps improve flexibility?",
    options: ["Running", "Weightlifting", "Stretching", "Cycling"],
    answer: "Stretching",
  },
  {
    question: "What does BMI stand for?",
    options: ["Body Mass Index", "Body Muscle Insight", "Basic Metabolism Indicator", "Balanced Mass Integration"],
    answer: "Body Mass Index",
  }
];

const FitnessQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizData[current].answer) setScore(score + 1);
    const next = current + 1;
    if (next < quizData.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h2>🏋️ Fitness Quiz</h2>
      {showResult ? (
        <div className="result">
          <h3>Your Score: {score} / {quizData.length}</h3>
          <p>{score >= 4 ? "Great job! 💪" : "Keep learning and training! 🧠"}</p>
        </div>
      ) : (
        <div className="question-box">
          <h3>{quizData[current].question}</h3>
          <div className="options">
            {quizData[current].options.map((option, idx) => (
              <button key={idx} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FitnessQuiz;
