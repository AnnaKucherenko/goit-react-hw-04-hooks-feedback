import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function FeedbackOptions({options, onClick}) {
  return (
    <ul className={style.buttonList}>
      {options.map(option => (
        <li key={option}><button
          name={option}
          type="button"
          onClick={()=>onClick(option)}
          className={style.button}>{option}</button>
        </li>
      ))}
     
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  
  onClick:  PropTypes.func.isRequired,
    
};

export default FeedbackOptions;

