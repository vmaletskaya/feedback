import React, { Component } from 'react';
import css from './Statistics.module.css';
const shortid = require('shortid');

export default class Statistics extends Component {
  render() {
    return (
      <ul className={css.list}>
        {Object.entries(this.props).map(item => {
          if (item[0] === 'positivePercentage') {
            return (
              <li key={shortid.generate()}>
                Positive feedback: <span>{item[1]} %</span>
              </li>
            );
          }
          return (
            <li key={shortid.generate()}>
              {item[0]}: <span>{item[1]}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}