import React, { useState } from 'react';

function Quiz() {
  const [answers, setAnswers] = useState({});

const handleSubmit = (event) => {
  event.preventDefault();

  console.log('User answers:', answers);
};

  const handleAnswerChange = (questionNumber, answer) => {
    setAnswers({ ...answers, [questionNumber]: answer });
  };

  return (
    <div>
      <h1>Mental Health Quiz</h1>
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div>
          <p>Question 1: How often do you feel sad or hopeless?</p>
          <label>
            <input
              type="radio"
              name="question1"
              value="Never"
              onChange={() => handleAnswerChange('question1', 'Never')}
            />
            Never
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="Rarely"
              onChange={() => handleAnswerChange('question1', 'Rarely')}
            />
            Rarely
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="Sometimes"
              onChange={() => handleAnswerChange('question1', 'Sometimes')}
            />
            Sometimes
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="Often"
              onChange={() => handleAnswerChange('question1', 'Often')}
            />
            Often
          </label>
        </div>

        <div>
          <p>Question 2: Do you have trouble concentrating in school or other activities?</p>
          <label>
            <input
              type="radio"
              name="question1"
              value="Never"
              onChange={() => handleAnswerChange('question2', 'Never')}
            />
            Never
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="Rarely"
              onChange={() => handleAnswerChange('question2', 'Rarely')}
            />
            Rarely
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="Sometimes"
              onChange={() => handleAnswerChange('question2', 'Sometimes')}
            />
            Sometimes
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="Often"
              onChange={() => handleAnswerChange('question2', 'Often')}
            />
            Often
          </label>
        </div>
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Quiz;
