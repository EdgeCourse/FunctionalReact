import React, { useState, useEffect, Suspense, lazy } from 'react';
import './index.css';
import axios from 'axios';

// Lazy Load the Question Component
const Question = lazy(() => import('./Question')); // Assuming Question is in a separate file

// Custom useFetch Hook (using Axios)
function useFetch(url) {
  // ... (same as before)
}

function Quiz() {
  // ... (state and handleNextQuestion remain the same)

  const { data: questions, loading, error } = useFetch('http://localhost:3000/questions');

  // Loading and Error Handling with Suspense
  if (loading) {
    return <p>Loading questions...</p>; 
  } else if (error) {
    return <p>Error loading questions: {error.message}</p>;
  }

  return (
    <div>
      <Suspense fallback={<p>Loading question component...</p>}> 
        {currentQuestionIndex < questions.length ? (
          <>
            <Question 
              questionText={questions[currentQuestionIndex].questionText}
              // ... other props
            />
            <button onClick={handleNextQuestion}>Next</button>
          </>
        ) : (
          <p>You scored {score} out of {questions.length}</p>
        )}
      </Suspense>
    </div>
  );
}

export default Quiz;
