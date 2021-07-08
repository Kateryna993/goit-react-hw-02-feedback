import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul className={styles.statsList}>
      <li>
        Good: <span className={styles.statsElemGood}>{good}</span>
      </li>
      <li>
        Neutral: <span className={styles.statsElemNeutral}>{neutral}</span>
      </li>
      <li>
        Bad: <span className={styles.statsElemBad}>{bad}</span>
      </li>
      <li>
        Total: <span className={styles.statsElemTotal}>{total}</span>
      </li>
      <li>
        Positive feedback:{' '}
        <span className={styles.statsElemPercent}>{percentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
