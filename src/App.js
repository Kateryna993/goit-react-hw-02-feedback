import React, { Component } from 'react';
import './index.css';
import Section from './components/Section/Section.jsx';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = label => {
    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;
