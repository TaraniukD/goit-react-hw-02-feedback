import React from "react";
import Statistics from "./Statistics";


class Feedback extends React.Component {
     static defaultProps = {
            good: 0,
            neutral: 0,
            bad: 0,
            total: 0,
            positivePercentage: 0
     };
        state = {
            good: this.props.good,
            neutral: this.props.neutral,
            bad: this.props.bad,
            total: this.props.total,
            positivePercentage: this.props.positivePercentage,
        };
    
    buttonGood = () => {
        this.setState(prevState => ({
        good: prevState.good + 1,
        }
        ));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }
    buttonNeutral = () => {
        this.setState(prevState => ({
        neutral: prevState.neutral + 1,
            }));
            this.countTotalFeedback();
            this.countPositiveFeedbackPercentage();
    }
    ButtonBad = () => {
        this.setState(prevState => {
            return { bad: prevState.bad + 1,
                total: prevState.good + prevState.neutral + prevState.bad
            };
            });
            this.countTotalFeedback();
            this.countPositiveFeedbackPercentage();
    }
    countTotalFeedback = () => {
        this.setState(prevState => {
            return {
                total: prevState.good + prevState.neutral + prevState.bad
            }
        })
    }
    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => {
            return {
                positivePercentage: (prevState.good / prevState.total * 100).toFixed(0)
    }
        })
    }

    render() {
        return (<div>
            <div>
                <h2>Please leave feedback</h2>
                <button type="button" onClick={this.buttonGood}>Good: </button>
                <button type="button" onClick={this.buttonNeutral}>Neutral:</button>
                <button type="button" onClick={this.ButtonBad}>Bad:</button>
            </div>
            <Statistics 
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total} 
            positivePercentage={this.state.positivePercentage}
            />
        </div>
            
        )
    }
}

export default Feedback;