import React from 'react';
import PropTypes from 'prop-types';
import style from './Notification.module.css';

function Notification({message}) {
  return (
    <div   className={style.notification}>{message && <p>{message}</p>}</div>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
      
};
export default Notification;