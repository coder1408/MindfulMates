import React, { useState } from 'react'
import './Quiz.css' // Import the CSS file
import axios from "axios";


 function  Quiz() {
  const [answers, setAnswers] = useState({})
  const [showThankYouMessage, setShowThankYouMessage] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('User answers:', answers)
    
    axios.post('http://localhost:3001/create', JSON.stringify(answers)).then(() => console.log("data sent")).catch(err => {
        console.log(err);
    });

    setShowThankYouMessage(true)
  }

  const handleAnswerChange = (questionNumber, answer) => {
    setAnswers({ ...answers, [questionNumber]: answer })
  }

  return (
    <div>
      <h1>MindfulMates</h1>
      <form onSubmit={handleSubmit}>

        {/* Question 1 */}
<div>
    <p>Question 1: How often do you feel sad or hopeless?</p>
    <label>
        <input type="radio" name="question1" value="Never" onChange={() => handleAnswerChange('q1', 'a')} />
        Never
    </label>
    <label>
        <input type="radio" name="question1" value="Rarely" onChange={() => handleAnswerChange('q1', 'b')} />
        Rarely
    </label>
    <label>
        <input type="radio" name="question1" value="Sometimes" onChange={() => handleAnswerChange('q1', 'c')} />
        Sometimes
    </label>
    <label>
        <input type="radio" name="question1" value="Often" onChange={() => handleAnswerChange('q1', 'd')} />
        Often
    </label>
</div>

{/* Question 2 */}
<div>
    <p>Question 2: Do you have trouble concentrating in school or other activities?</p>
    <label>
        <input type="radio" name="question2" value="Never" onChange={() => handleAnswerChange('q2', 'a')} />
        Never
    </label>
    <label>
        <input type="radio" name="question2" value="Rarely" onChange={() => handleAnswerChange('q2', 'b')} />
        Rarely
    </label>
    <label>
        <input type="radio" name="question2" value="Sometimes" onChange={() => handleAnswerChange('q2', 'c')} />
        Sometimes
    </label>
    <label>
        <input type="radio" name="question2" value="Often" onChange={() => handleAnswerChange('q2', 'd')} />
        Often
    </label>
</div>

{/* Question 3 */}
<div>
    <p>Question 3: Have you experienced changes in your eating habits recently?</p>
    <label>
        <input type="radio" name="question3" value="No changes" onChange={() => handleAnswerChange('q3', 'a')} />
        No changes
    </label>
    <label>
        <input type="radio" name="question3" value="Eating more than usual" onChange={() => handleAnswerChange('q3', 'b')} />
        Eating more than usual
    </label>
    <label>
        <input type="radio" name="question3" value="Eating less than usual" onChange={() => handleAnswerChange('q3', 'c')} />
        Eating less than usual
    </label>
    <label>
        <input type="radio" name="question3" value="Eating very little or a lot more than usual" onChange={() => handleAnswerChange('q3', 'd')} />
        Eating very little or a lot more than usual
    </label>
</div>

{/* Question 4 */}
<div>
    <p>Question 4: How often do you feel anxious or worried?</p>
    <label>
        <input type="radio" name="question4" value="Never" onChange={() => handleAnswerChange('q4', 'a')} />
        Never
    </label>
    <label>
        <input type="radio" name="question4" value="Rarely" onChange={() => handleAnswerChange('q4', 'b')} />
        Rarely
    </label>
    <label>
        <input type="radio" name="question4" value="Sometimes" onChange={() => handleAnswerChange('q4', 'c')} />
        Sometimes
    </label>
    <label>
        <input type="radio" name="question4" value="Often" onChange={() => handleAnswerChange('q4', 'd')} />
        Often
    </label>
</div>
{/* Question 5 */}
<div>
    <p>Question 5: Do you have trouble sleeping at night?</p>
    <label>
        <input type="radio" name="question5" value="No trouble sleeping" onChange={() => handleAnswerChange('q5', 'a')} />
        No trouble sleeping
    </label>
    <label>
        <input type="radio" name="question5" value="Trouble falling asleep" onChange={() => handleAnswerChange('q5', 'b')} />
        Trouble falling asleep
    </label>
    <label>
        <input type="radio" name="question5" value="Waking up frequently" onChange={() => handleAnswerChange('q5', 'c')} />
        Waking up frequently
    </label>
    <label>
        <input type="radio" name="question5" value="Nightmares or night terrors" onChange={() => handleAnswerChange('q5', 'd')} />
        Nightmares or night terrors
    </label>
</div>

{/* Question 6 */}
<div>
    <p>Question 6: How often do you feel overwhelmed by schoolwork or other responsibilities?</p>
    <label>
        <input type="radio" name="question6" value="Never" onChange={() => handleAnswerChange('q6', 'a')} />
        Never
    </label>
    <label>
        <input type="radio" name="question6" value="Rarely" onChange={() => handleAnswerChange('q6', 'b')} />
        Rarely
    </label>
    <label>
        <input type="radio" name="question6" value="Sometimes" onChange={() => handleAnswerChange('q6', 'c')} />
        Sometimes
    </label>
    <label>
        <input type="radio" name="question6" value="Often" onChange={() => handleAnswerChange('q6', 'd')} />
        Often
    </label>
</div>

{/* Question 7 */}
<div>
    <p>Question 7: Do you often feel irritable or easily angered?</p>
    <label>
        <input type="radio" name="question7" value="Rarely or never" onChange={() => handleAnswerChange('q7', 'a')} />
        Rarely or never
    </label>
    <label>
        <input type="radio" name="question7" value="Occasionally" onChange={() => handleAnswerChange('q7', 'b')} />
        Occasionally
    </label>
    <label>
        <input type="radio" name="question7" value="Frequently" onChange={() => handleAnswerChange('q7', 'c')} />
        Frequently
    </label>
    <label>
        <input type="radio" name="question7" value="Almost all the time" onChange={() => handleAnswerChange('q7', 'd')} />
        Almost all the time
    </label>
</div>
{/* Question 8 */}
<div>
    <p>Question 8: Have you experienced changes in your social interactions or friendships recently?</p>
    <label>
        <input type="radio" name="question8" value="No changes" onChange={() => handleAnswerChange('q8', 'a')} />
        No changes
    </label>
    <label>
        <input type="radio" name="question8" value="More withdrawn or isolated" onChange={() => handleAnswerChange('q8', 'b')} />
        More withdrawn or isolated
    </label>
    <label>
        <input type="radio" name="question8" value="More conflicts with friends" onChange={() => handleAnswerChange('q8', 'c')} />
        More conflicts with friends
    </label>
    <label>
        <input type="radio" name="question8" value="Making new friends easily" onChange={() => handleAnswerChange('q8', 'd')} />
        Making new friends easily
    </label>
</div>

{/* Question 9 */}
<div>
    <p>Question 9: How do you cope with stress or difficult emotions?</p>
    <label>
        <input type="radio" name="question9" value="Talk to someone I trust" onChange={() => handleAnswerChange('q9', 'a')} />
        Talk to someone I trust
    </label>
    <label>
        <input type="radio" name="question9" value="Keep my feelings to myself" onChange={() => handleAnswerChange('q9', 'b')} />
        Keep my feelings to myself
    </label>
    <label>
        <input type="radio" name="question9" value="Engage in hobbies or activities" onChange={() => handleAnswerChange('q9', 'c')} />
        Engage in hobbies or activities
    </label>
    <label>
        <input type="radio" name="question9" value="Use unhealthy coping mechanisms" onChange={() => handleAnswerChange('q9', 'd')} />
        Use unhealthy coping mechanisms
    </label>
</div>

{/* Question 10 */}
<div>
    <p>Question 10: Do you often feel tired or lack energy for daily activities?</p>
    <label>
        <input type="radio" name="question10" value="Rarely or never" onChange={() => handleAnswerChange('q10', 'a')} />
        Rarely or never
    </label>
    <label>
        <input type="radio" name="question10" value="Occasionally" onChange={() => handleAnswerChange('q10', 'b')} />
        Occasionally
    </label>
    <label>
        <input type="radio" name="question10" value="Frequently" onChange={() => handleAnswerChange('q10', 'c')} />
        Frequently
    </label>
    <label>
        <input type="radio" name="question10" value="Almost all the time" onChange={() => handleAnswerChange('q10', 'd')} />
        Almost all the time
    </label>
</div>


        <button type="submit">Submit</button>
      </form>
      {showThankYouMessage && (
        <div className="thank-you-message">
          <p>Thank you for submitting your answers!</p>
        </div>
      )}
    </div>
  )
}

export default Quiz