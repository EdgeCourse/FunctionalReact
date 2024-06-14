import React, { useState, useEffect } from 'react';
import './index.css';
function Question({ questionText, options, correctAnswer, selectedOption, onSelectOption }) {
  return (
    <div>
      <p>{questionText}</p>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={questionText}
            value={option}
            checked={selectedOption === option}
            onChange={() => onSelectOption(option)} // Call the parent's handler
          />
          {option}
        </label>
      ))}
    </div>
  );
}
// Custom useFetch hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const { data: questions, loading, error } = useFetch('http://localhost:3000/questions'); // Replace with your API endpoint

  const handleNextQuestion = () => {
    if (questions[currentQuestionIndex].correctAnswer === selectedOption) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <>
          <Question
            questionText={questions[currentQuestionIndex].questionText}
            options={questions[currentQuestionIndex].options}
            correctAnswer={questions[currentQuestionIndex].correctAnswer}
            selectedOption={selectedOption}
            onSelectOption={setSelectedOption}
          />
          <button onClick={handleNextQuestion}>Next</button>
        </>
      ) : (
        <p>You scored {score} out of {questions.length}</p>
      )}
    </div>
  );
}
export default Quiz;
