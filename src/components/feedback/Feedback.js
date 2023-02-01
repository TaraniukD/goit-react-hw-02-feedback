import React from "react";

class Feedback extends React.Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    }
    buttonGood = () => {
        this.setState(prevState => ({
        good: prevState.good + 1,
        }));
    }
    buttonNeutral = () => {
        this.setState(prevState => ({
        neutral: prevState.neutral + 1
            }));
    }
    ButtonBad = () => {
        this.setState(prevState => {
            return { bad: prevState.bad + 1,
            };
            });
    }

    render() {
        return (<div>
            <div>
                <h2>Please leave feedback</h2>
                <button type="button" onClick={this.buttonGood}>Good: </button>
                <button type="button" onClick={this.buttonNeutral}>Neutral:</button>
                <button type="button" onClick={this.ButtonBad}>Bad:</button>
            </div>
            <div>
                <h2>Statistics</h2>
                <p >Good: {this.state.good}</p>
                <p >Neutral: {this.state.neutral}</p>
                <p >Bad: {this.state.bad}</p>
            </div>
        </div>
            
        )
    }
}

export default Feedback;