import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';
const shortid = require('shortid');

export default function FeedbackOptions(props){

    const { options, onLeaveFeedback } = props;
    return (
      <div className={css.Container}>
        {Object.entries(options).map(b =>
          (<button
              key={shortid.generate()}
              className={css.button}
              type="button"
              name={b[0]}
              onClick={onLeaveFeedback}
            >
              {b[0]}
            </button>)
        )
        }
      </div>
    );
  
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

