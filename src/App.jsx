import { useState } from "react";
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Section from './components/section/Section';
import Notification from './components/notification/Notification';
  
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (feedback) => {
    if(feedback==='good'){
      setGood(good + 1)
    }
    if(feedback==='neutral'){
      setNeutral(neutral + 1)
    }
    if(feedback==='bad'){
      setBad(bad + 1)
    }
       
  }

  const countTotalFeedback = () => {
      return good + neutral + bad;  
    };
  const countPositiveFeedbackPercentage = () => {
      return good * 100 / countTotalFeedback();  
    };
  
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onClick={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} /> : <Notification message="There is no feedback"></Notification>}
        </Section>
      </div>
    ); 
  
};


