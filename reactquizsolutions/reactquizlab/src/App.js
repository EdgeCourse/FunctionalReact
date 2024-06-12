import React, { useState } from 'react';
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

function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // State lifted to Quiz

  const questions = [
    {
      "questionText": "What is the name of the function used to update the state of a component in React?",
      "options": ["useState", "useEffect", "useRef", "useCallback"],
      "correctAnswer": "useState",
    },
    {
      "questionText": "What is React Router primarily used for?",
      "options": [
        "Styling components",
        "Managing state",
        "Handling navigation in single-page applications",
        "Fetching data from APIs"
      ],
      "correctAnswer": ""
    },

    {
      "questionText": "What is the correct way to handle forms in React?",
      "options": [
        "Use uncontrolled components for all form elements.",
        "Use controlled components for all form elements.",
        "Use a combination of controlled and uncontrolled components.",
        "Avoid using forms in React altogether."
      ],
      "correctAnswer": ""
    },
   

    {
      "questionText": "Which of these is NOT a valid React hook?",
      "options": ["useReducer", "useCallback", "useContext", "useComponent"],
      "correctAnswer": ""
    },
    {
      "questionText": "What is the recommended way to style React components?",
      "options": [
        "Inline styles",
        "CSS Modules",
        "Styled Components",
        "All of the above"
      ],
      "correctAnswer": ""
    },
    {
      "questionText": "Which of the following tools is commonly used for state management in React applications?",
      "options": ["Redux", "Vuex", "MobX", "Flux"],
      "correctAnswer": ""
    },
 
    {
      "questionText": "What is the difference between `React.Fragment` and a regular `<div>` element?",
      "options": [
        "`React.Fragment` is a real DOM element, while `<div>` is not.",
        "`React.Fragment` does not add an extra node to the DOM, while `<div>` does.",
        "`React.Fragment` can be styled, while `<div>` cannot.",
        "There is no difference between `React.Fragment` and `<div>`."
      ],
      "correctAnswer": ""
    },
  
    {
      "questionText": "What is the purpose of the `ref` attribute in React?",
      "options": [
        "To apply inline styles to an element.",
        "To create a reference to a DOM element or a class component instance.",
        "To bind an event handler to an element.",
        "To define the data type of a prop."
      ],
      "correctAnswer": ""
    },
    {
      "questionText": "What is the correct way to pass a function as a prop in React?",
      "options": [
        "`<Component myFunction={myFunction()} />`",
        "`<Component myFunction={myFunction} />`",
        "`<Component myFunction={() => myFunction()} />`",
        "All of the above."
      ],
      "correctAnswer": ""
    },
    {
      "questionText": "Which of the following is NOT a valid way to create a React component?",
      "options": [
        "Using a function component.",
        "Using a class component.",
        "Using a higher-order component.",
        "Using a template literal."
      ],
      "correctAnswer": ""
    },
  

    {
      "questionText": "What are the benefits of using React's Context API?",
      "options": [
        "It eliminates the need to pass props through intermediate components.",
        "It provides a global state management solution.",
        "It can improve performance in certain scenarios.",
        "All of the above."
      ],
      "correctAnswer": ""
    },

    {
      "questionText": "Which hook is used to access the navigation object in React Router?",
      "options": ["useHistory", "useLocation", "useParams", "useNavigate"],
      "correctAnswer": "useNavigate"
    },
    {
      "questionText": "How do you create a custom hook in React?",
      "options": [
        "By defining a function that starts with the word 'use'.",
        "By using the `React.createHook` function.",
        "By extending the `React.Component` class.",
        "Custom hooks cannot be created in React."
      ],
      "correctAnswer": ""
    },
  

    {
      "questionText": "Which of the following is NOT a valid way to add comments in JSX or JavaScript?",
      "options": [
        "{/* This is a comment */}",
        "// This is a comment",
        "{/* This is a multi-line comment */}",
        "<!-- This is a comment -->"
      ],
      "correctAnswer": ""
    },
 
    {
      "questionText": "Which of the following are valid React component naming conventions?",
      "options": [
        "myComponent",
        "MyComponent",
        "my_component",
        "My_Component"
      ],
      "correctAnswer": ""
    },

    
    

    
    // Add more questions here...
  ];

  const handleNextQuestion = () => {
    if (questions[currentQuestionIndex].correctAnswer === selectedOption) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null); // Reset selected option for the next question
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <>
          <Question
            questionText={questions[currentQuestionIndex].questionText}
            options={questions[currentQuestionIndex].options}
            correctAnswer={questions[currentQuestionIndex].correctAnswer}
            selectedOption={selectedOption} 
            onSelectOption={setSelectedOption} // Pass the setter function
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
