import React, { Component } from 'react';
import css from './App.module.css';


import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  sum = 0;

  countTotalFeedback(data) {
    return (this.sum = Object.values(data).reduce(
      (acc, number) => acc + number
    ));
  }

  countPositiveFeedbackPercentage(data) {
    return data.good !== 0 ? Math.round((data.good / this.sum) * 100) : 0;
  }

  onLeaveFeedback = e => {
    this.setState(prevState => {
      return (prevState[e.target.name] += 1);
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.app}>
        <Section title="Please, leave your feedback" children>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {Object.values(this.state).some(values => values !== 0) ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
