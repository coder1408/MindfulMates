import React, { useState } from 'react'
import './Quiz.css' // Import the CSS file

function Quiz() {
  const [answers, setAnswers] = useState({})
  const [showThankYouMessage, setShowThankYouMessage] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('User answers:', answers)
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
        <input type="radio" name="question1" value="Never" onChange={() => handleAnswerChange('question1', 'Never')} />
        Never
    </label>
    <label>
        <input type="radio" name="question1" value="Rarely" onChange={() => handleAnswerChange('question1', 'Rarely')} />
        Rarely
    </label>
    <label>
        <input type="radio" name="question1" value="Sometimes" onChange={() => handleAnswerChange('question1', 'Sometimes')} />
        Sometimes
    </label>
    <label>
        <input type="radio" name="question1" value="Often" onChange={() => handleAnswerChange('question1', 'Often')} />
        Often
    </label>
</div>

{/* Question 2 */}
<div>
    <p>Question 2: Do you have trouble concentrating in school or other activities?</p>
    <label>
        <input type="radio" name="question2" value="Never" onChange={() => handleAnswerChange('question2', 'Never')} />
        Never
    </label>
    <label>
        <input type="radio" name="question2" value="Rarely" onChange={() => handleAnswerChange('question2', 'Rarely')} />
        Rarely
    </label>
    <label>
        <input type="radio" name="question2" value="Sometimes" onChange={() => handleAnswerChange('question2', 'Sometimes')} />
        Sometimes
    </label>
    <label>
        <input type="radio" name="question2" value="Often" onChange={() => handleAnswerChange('question2', 'Often')} />
        Often
    </label>
</div>

{/* Question 3 */}
<div>
    <p>Question 3: Have you experienced changes in your eating habits recently?</p>
    <label>
        <input type="radio" name="question3" value="No changes" onChange={() => handleAnswerChange('question3', 'No changes')} />
        No changes
    </label>
    <label>
        <input type="radio" name="question3" value="Eating more than usual" onChange={() => handleAnswerChange('question3', 'Eating more than usual')} />
        Eating more than usual
    </label>
    <label>
        <input type="radio" name="question3" value="Eating less than usual" onChange={() => handleAnswerChange('question3', 'Eating less than usual')} />
        Eating less than usual
    </label>
    <label>
        <input type="radio" name="question3" value="Eating very little or a lot more than usual" onChange={() => handleAnswerChange('question3', 'Eating very little or a lot more than usual')} />
        Eating very little or a lot more than usual
    </label>
</div>

{/* Question 4 */}
<div>
    <p>Question 4: How often do you feel anxious or worried?</p>
    <label>
        <input type="radio" name="question4" value="Never" onChange={() => handleAnswerChange('question4', 'Never')} />
        Never
    </label>
    <label>
        <input type="radio" name="question4" value="Rarely" onChange={() => handleAnswerChange('question4', 'Rarely')} />
        Rarely
    </label>
    <label>
        <input type="radio" name="question4" value="Sometimes" onChange={() => handleAnswerChange('question4', 'Sometimes')} />
        Sometimes
    </label>
    <label>
        <input type="radio" name="question4" value="Often" onChange={() => handleAnswerChange('question4', 'Often')} />
        Often
    </label>
</div>
{/* Question 5 */}
<div>
    <p>Question 5: Do you have trouble sleeping at night?</p>
    <label>
        <input type="radio" name="question5" value="No trouble sleeping" onChange={() => handleAnswerChange('question5', 'No trouble sleeping')} />
        No trouble sleeping
    </label>
    <label>
        <input type="radio" name="question5" value="Trouble falling asleep" onChange={() => handleAnswerChange('question5', 'Trouble falling asleep')} />
        Trouble falling asleep
    </label>
    <label>
        <input type="radio" name="question5" value="Waking up frequently" onChange={() => handleAnswerChange('question5', 'Waking up frequently')} />
        Waking up frequently
    </label>
    <label>
        <input type="radio" name="question5" value="Nightmares or night terrors" onChange={() => handleAnswerChange('question5', 'Nightmares or night terrors')} />
        Nightmares or night terrors
    </label>
</div>

{/* Question 6 */}
<div>
    <p>Question 6: How often do you feel overwhelmed by schoolwork or other responsibilities?</p>
    <label>
        <input type="radio" name="question6" value="Never" onChange={() => handleAnswerChange('question6', 'Never')} />
        Never
    </label>
    <label>
        <input type="radio" name="question6" value="Rarely" onChange={() => handleAnswerChange('question6', 'Rarely')} />
        Rarely
    </label>
    <label>
        <input type="radio" name="question6" value="Sometimes" onChange={() => handleAnswerChange('question6', 'Sometimes')} />
        Sometimes
    </label>
    <label>
        <input type="radio" name="question6" value="Often" onChange={() => handleAnswerChange('question6', 'Often')} />
        Often
    </label>
</div>

{/* Question 7 */}
<div>
    <p>Question 7: Do you often feel irritable or easily angered?</p>
    <label>
        <input type="radio" name="question7" value="Rarely or never" onChange={() => handleAnswerChange('question7', 'Rarely or never')} />
        Rarely or never
    </label>
    <label>
        <input type="radio" name="question7" value="Occasionally" onChange={() => handleAnswerChange('question7', 'Occasionally')} />
        Occasionally
    </label>
    <label>
        <input type="radio" name="question7" value="Frequently" onChange={() => handleAnswerChange('question7', 'Frequently')} />
        Frequently
    </label>
    <label>
        <input type="radio" name="question7" value="Almost all the time" onChange={() => handleAnswerChange('question7', 'Almost all the time')} />
        Almost all the time
    </label>
</div>
{/* Question 8 */}
<div>
    <p>Question 8: Have you experienced changes in your social interactions or friendships recently?</p>
    <label>
        <input type="radio" name="question8" value="No changes" onChange={() => handleAnswerChange('question8', 'No changes')} />
        No changes
    </label>
    <label>
        <input type="radio" name="question8" value="More withdrawn or isolated" onChange={() => handleAnswerChange('question8', 'More withdrawn or isolated')} />
        More withdrawn or isolated
    </label>
    <label>
        <input type="radio" name="question8" value="More conflicts with friends" onChange={() => handleAnswerChange('question8', 'More conflicts with friends')} />
        More conflicts with friends
    </label>
    <label>
        <input type="radio" name="question8" value="Making new friends easily" onChange={() => handleAnswerChange('question8', 'Making new friends easily')} />
        Making new friends easily
    </label>
</div>

{/* Question 9 */}
<div>
    <p>Question 9: How do you cope with stress or difficult emotions?</p>
    <label>
        <input type="radio" name="question9" value="Talk to someone I trust" onChange={() => handleAnswerChange('question9', 'Talk to someone I trust')} />
        Talk to someone I trust
    </label>
    <label>
        <input type="radio" name="question9" value="Keep my feelings to myself" onChange={() => handleAnswerChange('question9', 'Keep my feelings to myself')} />
        Keep my feelings to myself
    </label>
    <label>
        <input type="radio" name="question9" value="Engage in hobbies or activities" onChange={() => handleAnswerChange('question9', 'Engage in hobbies or activities')} />
        Engage in hobbies or activities
    </label>
    <label>
        <input type="radio" name="question9" value="Use unhealthy coping mechanisms" onChange={() => handleAnswerChange('question9', 'Use unhealthy coping mechanisms')} />
        Use unhealthy coping mechanisms
    </label>
</div>

{/* Question 10 */}
<div>
    <p>Question 10: Do you often feel tired or lack energy for daily activities?</p>
    <label>
        <input type="radio" name="question10" value="Rarely or never" onChange={() => handleAnswerChange('question10', 'Rarely or never')} />
        Rarely or never
    </label>
    <label>
        <input type="radio" name="question10" value="Occasionally" onChange={() => handleAnswerChange('question10', 'Occasionally')} />
        Occasionally
    </label>
    <label>
        <input type="radio" name="question10" value="Frequently" onChange={() => handleAnswerChange('question10', 'Frequently')} />
        Frequently
    </label>
    <label>
        <input type="radio" name="question10" value="Almost all the time" onChange={() => handleAnswerChange('question10', 'Almost all the time')} />
        Almost all the time
    </label>
</div>
{/* Question 11 */}
<div>
    <p>Question 11: How do you feel about your body image and appearance?</p>
    <label>
        <input type="radio" name="question11" value="Positive and confident" onChange={() => handleAnswerChange('question11', 'Positive and confident')} />
        Positive and confident
    </label>
    <label>
        <input type="radio" name="question11" value="Neutral" onChange={() => handleAnswerChange('question11', 'Neutral')} />
        Neutral
    </label>
    <label>
        <input type="radio" name="question11" value="Insecure or dissatisfied" onChange={() => handleAnswerChange('question11', 'Insecure or dissatisfied')} />
        Insecure or dissatisfied
    </label>
    <label>
        <input type="radio" name="question11" value="Obsessive or preoccupied" onChange={() => handleAnswerChange('question11', 'Obsessive or preoccupied')} />
        Obsessive or preoccupied
    </label>
</div>

{/* Question 12 */}
<div>
    <p>Question 12: Do you often feel overwhelmed by emotions that are hard to control?</p>
    <label>
        <input type="radio" name="question12" value="Rarely or never" onChange={() => handleAnswerChange('question12', 'Rarely or never')} />
        Rarely or never
    </label>
    <label>
        <input type="radio" name="question12" value="Occasionally" onChange={() => handleAnswerChange('question12', 'Occasionally')} />
        Occasionally
    </label>
    <label>
        <input type="radio" name="question12" value="Frequently" onChange={() => handleAnswerChange('question12', 'Frequently')} />
        Frequently
    </label>
    <label>
        <input type="radio" name="question12" value="Almost all the time" onChange={() => handleAnswerChange('question12', 'Almost all the time')} />
        Almost all the time
    </label>
</div>

{/* Question 13 */}
<div>
    <p>Question 13: Have you experienced changes in your sleep patterns recently?</p>
    <label>
        <input type="radio" name="question13" value="No changes" onChange={() => handleAnswerChange('question13', 'No changes')} />
        No changes
    </label>
    <label>
        <input type="radio" name="question13" value="Trouble falling asleep" onChange={() => handleAnswerChange('question13', 'Trouble falling asleep')} />
        Trouble falling asleep
    </label>
    <label>
        <input type="radio" name="question13" value="Waking up early" onChange={() => handleAnswerChange('question13', 'Waking up early')} />
        Waking up early
    </label>
    <label>
        <input type="radio" name="question13" value="Sleeping excessively" onChange={() => handleAnswerChange('question13', 'Sleeping excessively')} />
        Sleeping excessively
    </label>
</div>
{/* Question 14 */}
<div>
    <p>Question 14: How do you handle conflicts or disagreements with others?</p>
    <label>
        <input type="radio" name="question14" value="Communicate openly and resolve peacefully" onChange={() => handleAnswerChange('question14', 'Communicate openly and resolve peacefully')} />
        Communicate openly and resolve peacefully
    </label>
    <label>
        <input type="radio" name="question14" value="Avoid confrontation" onChange={() => handleAnswerChange('question14', 'Avoid confrontation')} />
        Avoid confrontation
    </label>
    <label>
        <input type="radio" name="question14" value="Get angry or aggressive" onChange={() => handleAnswerChange('question14', 'Get angry or aggressive')} />
        Get angry or aggressive
    </label>
    <label>
        <input type="radio" name="question14" value="Shut down or withdraw" onChange={() => handleAnswerChange('question14', 'Shut down or withdraw')} />
        Shut down or withdraw
    </label>
</div>

{/* Question 15 */}
<div>
    <p>Question 15: Do you often feel lonely or isolated from others?</p>
    <label>
        <input type="radio" name="question15" value="Rarely or never" onChange={() => handleAnswerChange('question15', 'Rarely or never')} />
        Rarely or never
    </label>
    <label>
        <input type="radio" name="question15" value="Occasionally" onChange={() => handleAnswerChange('question15', 'Occasionally')} />
        Occasionally
    </label>
    <label>
        <input type="radio" name="question15" value="Frequently" onChange={() => handleAnswerChange('question15', 'Frequently')} />
        Frequently
    </label>
    <label>
        <input type="radio" name="question15" value="Almost all the time" onChange={() => handleAnswerChange('question15', 'Almost all the time')} />
        Almost all the time
    </label>
</div>

{/* Question 16 */}
<div>
    <p>Question 16: How do you feel about going to school or participating in activities?</p>
    <label>
        <input type="radio" name="question16" value="Excited and motivated" onChange={() => handleAnswerChange('question16', 'Excited and motivated')} />
        Excited and motivated
    </label>
    <label>
        <input type="radio" name="question16" value="Neutral" onChange={() => handleAnswerChange('question16', 'Neutral')} />
        Neutral
    </label>
    <label>
        <input type="radio" name="question16" value="Anxious or reluctant" onChange={() => handleAnswerChange('question16', 'Anxious or reluctant')} />
        Anxious or reluctant
    </label>
    <label>
        <input type="radio" name="question16" value="Avoidant or resistant" onChange={() => handleAnswerChange('question16', 'Avoidant or resistant')} />
        Avoidant or resistant
    </label>
</div>
{/* Question 17 */}
<div>
    <p>Question 17: Have you noticed changes in your appetite or eating habits recently?</p>
    <label>
        <input type="radio" name="question17" value="No changes" onChange={() => handleAnswerChange('question17', 'No changes')} />
        No changes
    </label>
    <label>
        <input type="radio" name="question17" value="Eating more than usual" onChange={() => handleAnswerChange('question17', 'Eating more than usual')} />
        Eating more than usual
    </label>
    <label>
        <input type="radio" name="question17" value="Eating less than usual" onChange={() => handleAnswerChange('question17', 'Eating less than usual')} />
        Eating less than usual
    </label>
    <label>
        <input type="radio" name="question17" value="Eating very little or a lot more than usual" onChange={() => handleAnswerChange('question17', 'Eating very little or a lot more than usual')} />
        Eating very little or a lot more than usual
    </label>
</div>

{/* Question 18 */}
<div>
    <p>Question 18: Do you often experience physical symptoms like headaches or stomachaches without a clear cause?</p>
    <label>
        <input type="radio" name="question18" value="Rarely or never" onChange={() => handleAnswerChange('question18', 'Rarely or never')} />
        Rarely or never
    </label>
    <label>
        <input type="radio" name="question18" value="Occasionally" onChange={() => handleAnswerChange('question18', 'Occasionally')} />
        Occasionally
    </label>
    <label>
        <input type="radio" name="question18" value="Frequently" onChange={() => handleAnswerChange('question18', 'Frequently')} />
        Frequently
    </label>
    <label>
        <input type="radio" name="question18" value="Almost all the time" onChange={() => handleAnswerChange('question18', 'Almost all the time')} />
        Almost all the time
    </label>
</div>

{/* Question 19 */}
<div>
    <p>Question 19: How do you feel about your relationships with family members?</p>
    <label>
        <input type="radio" name="question19" value="Close and supportive" onChange={() => handleAnswerChange('question19', 'Close and supportive')} />
        Close and supportive
    </label>
    <label>
        <input type="radio" name="question19" value="Neutral" onChange={() => handleAnswerChange('question19', 'Neutral')} />
        Neutral
    </label>
    <label>
        <input type="radio" name="question19" value="Strained or conflicted" onChange={() => handleAnswerChange('question19', 'Strained or conflicted')} />
        Strained or conflicted
    </label>
    <label>
        <input type="radio" name="question19" value="Distant or disconnected" onChange={() => handleAnswerChange('question19', 'Distant or disconnected')} />
        Distant or disconnected
    </label>
</div>
<div>
    <p>Question 20: Do you have thoughts of self-harm or suicide?</p>
    <label>
        <input type="radio" name="question20" value="Never" onChange={() => handleAnswerChange('question20', 'Never')} />
        Never
    </label>
    <label>
        <input type="radio" name="question20" value="Rarely" onChange={() => handleAnswerChange('question20', 'Rarely')} />
        Rarely
    </label>
    <label>
        <input type="radio" name="question20" value="Sometimes" onChange={() => handleAnswerChange('question20', 'Sometimes')} />
        Sometimes
    </label>
    <label>
        <input type="radio" name="question20" value="Often" onChange={() => handleAnswerChange('question20', 'Often')} />
        Often
    </label>
</div>
{/* Question 21 */}
<div>
    <p>Question 21: How do you feel about your academic performance and achievements?</p>
    <label>
        <input type="radio" name="question21" value="Satisfied and proud" onChange={() => handleAnswerChange('question21', 'Satisfied and proud')} />
        A) Satisfied and proud
    </label>
    <label>
        <input type="radio" name="question21" value="Neutral" onChange={() => handleAnswerChange('question21', 'Neutral')} />
        B) Neutral
    </label>
    <label>
        <input type="radio" name="question21" value="Insecure or disappointed" onChange={() => handleAnswerChange('question21', 'Insecure or disappointed')} />
        C) Insecure or disappointed
    </label>
    <label>
        <input type="radio" name="question21" value="Overwhelmed or stressed" onChange={() => handleAnswerChange('question21', 'Overwhelmed or stressed')} />
        D) Overwhelmed or stressed
    </label>
</div>

{/* Question 22 */}
<div>
    <p>Question 22: Do you often feel misunderstood or not listened to by others?</p>
    <label>
        <input type="radio" name="question22" value="Rarely or never" onChange={() => handleAnswerChange('question22', 'Rarely or never')} />
        A) Rarely or never
    </label>
    <label>
        <input type="radio" name="question22" value="Occasionally" onChange={() => handleAnswerChange('question22', 'Occasionally')} />
        B) Occasionally
    </label>
    <label>
        <input type="radio" name="question22" value="Frequently" onChange={() => handleAnswerChange('question22', 'Frequently')} />
        C) Frequently
    </label>
    <label>
        <input type="radio" name="question22" value="Almost all the time" onChange={() => handleAnswerChange('question22', 'Almost all the time')} />
        D) Almost all the time
    </label>
</div>

{/* Question 23 */}
<div>
    <p>Question 23: Have you experienced changes in your mood swings or emotions recently?</p>
    <label>
        <input type="radio" name="question23" value="No changes" onChange={() => handleAnswerChange('question23', 'No changes')} />
        A) No changes
    </label>
    <label>
        <input type="radio" name="question23" value="More frequent mood swings" onChange={() => handleAnswerChange('question23', 'More frequent mood swings')} />
        B) More frequent mood swings
    </label>
    <label>
        <input type="radio" name="question23" value="Feeling more emotionally sensitive" onChange={() => handleAnswerChange('question23', 'Feeling more emotionally sensitive')} />
        C) Feeling more emotionally sensitive
    </label>
    <label>
        <input type="radio" name="question23" value="Extreme highs and lows" onChange={() => handleAnswerChange('question23', 'Extreme highs and lows')} />
        D) Extreme highs and lows
    </label>
</div>
{/* Question 24 */}
<div>
    <p>Question 24: How do you cope with peer pressure or social expectations?</p>
    <label>
        <input type="radio" name="question24" value="Stay true to myself" onChange={() => handleAnswerChange('question24', 'Stay true to myself')} />
        A) Stay true to myself
    </label>
    <label>
        <input type="radio" name="question24" value="Give in to peer pressure" onChange={() => handleAnswerChange('question24', 'Give in to peer pressure')} />
        B) Give in to peer pressure
    </label>
    <label>
        <input type="radio" name="question24" value="Feel anxious or stressed" onChange={() => handleAnswerChange('question24', 'Feel anxious or stressed')} />
        C) Feel anxious or stressed
    </label>
    <label>
        <input type="radio" name="question24" value="Pretend to fit in" onChange={() => handleAnswerChange('question24', 'Pretend to fit in')} />
        D) Pretend to fit in
    </label>
</div>

{/* Question 25 */}
<div>
    <p>Question 25: Do you often feel overwhelmed by responsibilities or obligations?</p>
    <label>
        <input type="radio" name="question25" value="Rarely or never" onChange={() => handleAnswerChange('question25', 'Rarely or never')} />
        A) Rarely or never
    </label>
    <label>
        <input type="radio" name="question25" value="Occasionally" onChange={() => handleAnswerChange('question25', 'Occasionally')} />
        B) Occasionally
    </label>
    <label>
        <input type="radio" name="question25" value="Frequently" onChange={() => handleAnswerChange('question25', 'Frequently')} />
        C) Frequently
    </label>
    <label>
        <input type="radio" name="question25" value="Almost all the time" onChange={() => handleAnswerChange('question25', 'Almost all the time')} />
        D) Almost all the time
    </label>
</div>

{/* Question 26 */}
<div>
    <p>Question 26: How do you handle setbacks or failures in your life?</p>
    <label>
        <input type="radio" name="question26" value="Learn from mistakes and move on" onChange={() => handleAnswerChange('question26', 'Learn from mistakes and move on')} />
        A) Learn from mistakes and move on
    </label>
    <label>
        <input type="radio" name="question26" value="Feel discouraged or give up" onChange={() => handleAnswerChange('question26', 'Feel discouraged or give up')} />
        B) Feel discouraged or give up
    </label>
    <label>
        <input type="radio" name="question26" value="Blame myself excessively" onChange={() => handleAnswerChange('question26', 'Blame myself excessively')} />
        C) Blame myself excessively
    </label>
    <label>
        <input type="radio" name="question26" value="Avoid trying again" onChange={() => handleAnswerChange('question26', 'Avoid trying again')} />
        D) Avoid trying again
    </label>
</div>
{/* Question 27 */}
<div>
    <p>Question 27: Have you noticed changes in your energy levels or motivation recently?</p>
    <label>
        <input type="radio" name="question27" value="No changes" onChange={() => handleAnswerChange('question27', 'No changes')} />
        A) No changes
    </label>
    <label>
        <input type="radio" name="question27" value="Feeling more tired or lethargic" onChange={() => handleAnswerChange('question27', 'Feeling more tired or lethargic')} />
        B) Feeling more tired or lethargic
    </label>
    <label>
        <input type="radio" name="question27" value="Increased restlessness or hyperactivity" onChange={() => handleAnswerChange('question27', 'Increased restlessness or hyperactivity')} />
        C) Increased restlessness or hyperactivity
    </label>
    <label>
        <input type="radio" name="question27" value="Fluctuating energy levels" onChange={() => handleAnswerChange('question27', 'Fluctuating energy levels')} />
        D) Fluctuating energy levels
    </label>
</div>

{/* Question 28 */}
<div>
    <p>Question 28: How do you feel about expressing your emotions or seeking help when needed?</p>
    <label>
        <input type="radio" name="question28" value="Comfortable and open" onChange={() => handleAnswerChange('question28', 'Comfortable and open')} />
        A) Comfortable and open
    </label>
    <label>
        <input type="radio" name="question28" value="Hesitant or embarrassed" onChange={() => handleAnswerChange('question28', 'Hesitant or embarrassed')} />
        B) Hesitant or embarrassed
    </label>
    <label>
        <input type="radio" name="question28" value="Fearful of judgment" onChange={() => handleAnswerChange('question28', 'Fearful of judgment')} />
        C) Fearful of judgment
    </label>
    <label>
        <input type="radio" name="question28" value="Prefer to keep emotions to myself" onChange={() => handleAnswerChange('question28', 'Prefer to keep emotions to myself')} />
        D) Prefer to keep emotions to myself
    </label>
</div>

{/* Question 29 */}
<div>
    <p>Question 29: Do you often experience feelings of guilt or self-blame?</p>
    <label>
        <input type="radio" name="question29" value="Rarely or never" onChange={() => handleAnswerChange('question29', 'Rarely or never')} />
        A) Rarely or never
    </label>
    <label>
        <input type="radio" name="question29" value="Occasionally" onChange={() => handleAnswerChange('question29', 'Occasionally')} />
        B) Occasionally
    </label>
    <label>
        <input type="radio" name="question29" value="Frequently" onChange={() => handleAnswerChange('question29', 'Frequently')} />
        C) Frequently
    </label>
    <label>
        <input type="radio" name="question29" value="Almost all the time" onChange={() => handleAnswerChange('question29', 'Almost all the time')} />
        D) Almost all the time
    </label>
</div>
{/* Question 30 */}
<div>
    <p>Question 30: How do you feel about your future and long-term goals?</p>
    <label>
        <input type="radio" name="question30" value="Optimistic and hopeful" onChange={() => handleAnswerChange('question30', 'Optimistic and hopeful')} />
        A) Optimistic and hopeful
    </label>
    <label>
        <input type="radio" name="question30" value="Uncertain or indifferent" onChange={() => handleAnswerChange('question30', 'Uncertain or indifferent')} />
        B) Uncertain or indifferent
    </label>
    <label>
        <input type="radio" name="question30" value="Anxious or worried" onChange={() => handleAnswerChange('question30', 'Anxious or worried')} />
        C) Anxious or worried
    </label>
    <label>
        <input type="radio" name="question30" value="Pessimistic or hopeless" onChange={() => handleAnswerChange('question30', 'Pessimistic or hopeless')} />
        D) Pessimistic or hopeless
    </label>
</div>

{/* Question 31 */}
<div>
    <p>Question 31: Have you experienced changes in your social interactions or relationships with peers recently?</p>
    <label>
        <input type="radio" name="question31" value="No changes" onChange={() => handleAnswerChange('question31', 'No changes')} />
        A) No changes
    </label>
    <label>
        <input type="radio" name="question31" value="More conflicts or misunderstandings" onChange={() => handleAnswerChange('question31', 'More conflicts or misunderstandings')} />
        B) More conflicts or misunderstandings
    </label>
    <label>
        <input type="radio" name="question31" value="Feeling more isolated" onChange={() => handleAnswerChange('question31', 'Feeling more isolated')} />
        C) Feeling more isolated
    </label>
    <label>
        <input type="radio" name="question31" value="Making new friends easily" onChange={() => handleAnswerChange('question31', 'Making new friends easily')} />
        D) Making new friends easily
    </label>
</div>

{/* Question 32 */}
<div>
    <p>Question 32: How do you handle stress or pressure in your daily life?</p>
    <label>
        <input type="radio" name="question32" value="Use healthy coping strategies" onChange={() => handleAnswerChange('question32', 'Use healthy coping strategies')} />
        A) Use healthy coping strategies
    </label>
    <label>
        <input type="radio" name="question32" value="Avoid stressful situations" onChange={() => handleAnswerChange('question32', 'Avoid stressful situations')} />
        B) Avoid stressful situations
    </label>
    <label>
        <input type="radio" name="question32" value="Feel overwhelmed or anxious" onChange={() => handleAnswerChange('question32', 'Feel overwhelmed or anxious')} />
        C) Feel overwhelmed or anxious
    </label>
    <label>
        <input type="radio" name="question32" value="Engage in risky behaviors" onChange={() => handleAnswerChange('question32', 'Engage in risky behaviors')} />
        D) Engage in risky behaviors
    </label>
</div>
{/* Question 33 */}
<div>
    <p>Question 33: Do you often feel restless or have trouble sitting still?</p>
    <label>
        <input type="radio" name="question33" value="Rarely or never" onChange={() => handleAnswerChange('question33', 'Rarely or never')} />
        A) Rarely or never
    </label>
    <label>
        <input type="radio" name="question33" value="Occasionally" onChange={() => handleAnswerChange('question33', 'Occasionally')} />
        B) Occasionally
    </label>
    <label>
        <input type="radio" name="question33" value="Frequently" onChange={() => handleAnswerChange('question33', 'Frequently')} />
        C) Frequently
    </label>
    <label>
        <input type="radio" name="question33" value="Almost all the time" onChange={() => handleAnswerChange('question33', 'Almost all the time')} />
        D) Almost all the time
    </label>
</div>

{/* Question 34 */}
<div>
    <p>Question 34: How do you feel about your self-esteem and self-worth?</p>
    <label>
        <input type="radio" name="question34" value="Confident and positive" onChange={() => handleAnswerChange('question34', 'Confident and positive')} />
        A) Confident and positive
    </label>
    <label>
        <input type="radio" name="question34" value="Neutral" onChange={() => handleAnswerChange('question34', 'Neutral')} />
        B) Neutral
    </label>
    <label>
        <input type="radio" name="question34" value="Insecure or self-critical" onChange={() => handleAnswerChange('question34', 'Insecure or self-critical')} />
        C) Insecure or self-critical
    </label>
    <label>
        <input type="radio" name="question34" value="Low self-esteem or self-hatred" onChange={() => handleAnswerChange('question34', 'Low self-esteem or self-hatred')} />
        D) Low self-esteem or self-hatred
    </label>
</div>

{/* Question 35 */}
<div>
    <p>Question 35: Have you noticed changes in your sleeping patterns or quality of sleep recently?</p>
    <label>
        <input type="radio" name="question35" value="No changes" onChange={() => handleAnswerChange('question35', 'No changes')} />
        A) No changes
    </label>
    <label>
        <input type="radio" name="question35" value="Trouble falling asleep or staying asleep" onChange={() => handleAnswerChange('question35', 'Trouble falling asleep or staying asleep')} />
        B) Trouble falling asleep or staying asleep
    </label>
    <label>
        <input type="radio" name="question35" value="Waking up frequently" onChange={() => handleAnswerChange('question35', 'Waking up frequently')} />
        C) Waking up frequently
    </label>
    <label>
        <input type="radio" name="question35" value="Experiencing nightmares or night terrors" onChange={() => handleAnswerChange('question35', 'Experiencing nightmares or night terrors')} />
        D) Experiencing nightmares or night terrors
    </label>
</div>

{/* Question 36 */}
<div>
    <p>Question 36: How do you cope with feelings of sadness or loneliness?</p>
    <label>
        <input type="radio" name="question36" value="Reach out to friends or family" onChange={() => handleAnswerChange('question36', 'Reach out to friends or family')} />
        A) Reach out to friends or family
    </label>
    <label>
        <input type="radio" name="question36" value="Keep emotions to myself" onChange={() => handleAnswerChange('question36', 'Keep emotions to myself')} />
        B) Keep emotions to myself
    </label>
    <label>
        <input type="radio" name="question36" value="Engage in activities to distract myself" onChange={() => handleAnswerChange('question36', 'Engage in activities to distract myself')} />
        C) Engage in activities to distract myself
    </label>
    <label>
        <input type="radio" name="question36" value="Feel overwhelmed and helpless" onChange={() => handleAnswerChange('question36', 'Feel overwhelmed and helpless')} />
        D) Feel overwhelmed and helpless
    </label>
</div>

{/* Question 37 */}
<div>
    <p>Question 37: Do you often feel anxious or worried about specific situations or events?</p>
    <label>
        <input type="radio" name="question37" value="Rarely or never" onChange={() => handleAnswerChange('question37', 'Rarely or never')} />
        A) Rarely or never
    </label>
    <label>
        <input type="radio" name="question37" value="Occasionally" onChange={() => handleAnswerChange('question37', 'Occasionally')} />
        B) Occasionally
    </label>
    <label>
        <input type="radio" name="question37" value="Frequently" onChange={() => handleAnswerChange('question37', 'Frequently')} />
        C) Frequently
    </label>
    <label>
        <input type="radio" name="question37" value="Almost all the time" onChange={() => handleAnswerChange('question37', 'Almost all the time')} />
        D) Almost all the time
    </label>
</div>

{/* Question 38 */}
<div>
    <p>Question 38: How do you feel about your relationships with siblings or family members?</p>
    <label>
        <input type="radio" name="question38" value="Close and supportive" onChange={() => handleAnswerChange('question38', 'Close and supportive')} />
        A) Close and supportive
    </label>
    <label>
        <input type="radio" name="question38" value="Neutral" onChange={() => handleAnswerChange('question38', 'Neutral')} />
        B) Neutral
    </label>
    <label>
        <input type="radio" name="question38" value="Strained or conflicted" onChange={() => handleAnswerChange('question38', 'Strained or conflicted')} />
        C) Strained or conflicted
    </label>
    <label>
        <input type="radio" name="question38" value="Distant or disconnected" onChange={() => handleAnswerChange('question38', 'Distant or disconnected')} />
        D) Distant or disconnected
    </label>
</div>
{/* Question 39 */}
<div>
    <p>Question 39: Have you experienced changes in your appetite or eating habits recently?</p>
    <label>
        <input type="radio" name="question39" value="No changes" onChange={() => handleAnswerChange('question39', 'No changes')} />
        A) No changes
    </label>
    <label>
        <input type="radio" name="question39" value="Eating more than usual" onChange={() => handleAnswerChange('question39', 'Eating more than usual')} />
        B) Eating more than usual
    </label>
    <label>
        <input type="radio" name="question39" value="Eating less than usual" onChange={() => handleAnswerChange('question39', 'Eating less than usual')} />
        C) Eating less than usual
    </label>
    <label>
        <input type="radio" name="question39" value="Loss of appetite or binge eating" onChange={() => handleAnswerChange('question39', 'Loss of appetite or binge eating')} />
        D) Loss of appetite or binge eating
    </label>
</div>

{/* Question 40 */}
<div>
    <p>Question 40: Do you often experience physical symptoms like headaches or stomachaches without a clear cause?</p>
    <label>
        <input type="radio" name="question40" value="Rarely or never" onChange={() => handleAnswerChange('question40', 'Rarely or never')} />
        A) Rarely or never
    </label>
    <label>
        <input type="radio" name="question40" value="Occasionally" onChange={() => handleAnswerChange('question40', 'Occasionally')} />
        B) Occasionally
    </label>
    <label>
        <input type="radio" name="question40" value="Frequently" onChange={() => handleAnswerChange('question40', 'Frequently')} />
        C) Frequently
    </label>
    <label>
        <input type="radio" name="question40" value="Almost all the time" onChange={() => handleAnswerChange('question40', 'Almost all the time')} />
        D) Almost all the time
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