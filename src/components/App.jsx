import React from "react";

import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

  export class App extends React.Component {
    static defaultProps = {
           good: 0,
           neutral: 0,
           bad: 0,
           
    };
       state = {
           good: this.props.good,
           neutral: this.props.neutral,
           bad: this.props.bad,
     
       };
   
   buttonClickTotal = e => {
       const {name} = e.target;
       this.setState(prevState => ({
       [name]: prevState[name] + 1,
       }
       ));
   }

   countTotalFeedback = () => {
           return this.state.good + this.state.neutral + this.state.bad;
   }

   countPositiveFeedbackPercentage = () => {
           return Math.round(this.state.good / this.countTotalFeedback() * 100)
   }

   render() {
       const { good, neutral, bad } = this.state;
       const total = this.countTotalFeedback();

       return (
       <div 
       style={{
        width: '360px',
        margin: '30px auto',
        padding: '20px',
        backgroundColor: '#d7eff1',
        textAlign: 'center',
        borderRadius: '10px',
       }}
       >
           <Section title="Please leave feedback">
               <FeedbackOptions options={ this.state } 
               onLeaveFeedback={this.buttonClickTotal} />
           </Section>

           { total !== 0 ? 
           (<Section title="Statistics">
           <Statistics 
           good={good}
           neutral={neutral}
           bad={bad}
           total={total} 
           positivePercentage={this.countPositiveFeedbackPercentage()}
           />
           </Section>) : 
           (<Notification message="There is no feedback :(" />)
           }
       </div> 
       )
   }
}
