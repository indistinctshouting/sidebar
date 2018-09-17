import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faClock);

const TimeToday = (props) => {
  let openOrClosedClass = 'summary-check-open';
  let statusText;
  if (props.isOpen) {
    openOrClosedClass = openOrClosedClass + ' green-text';
    statusText = 'Open Now';
  } else {
    openOrClosedClass = openOrClosedClass + ' red-text';
    statusText = 'Closed Now';
  }

  return (
    <li className="time-container">
      <div className="summary-icon">
        <FontAwesomeIcon icon="clock"/>
      </div>
      <span>Today</span>
      <span className="menu-item-text">{props.times}</span>
      <span className={openOrClosedClass + " menu-item-text"}> {statusText}</span>
    </li>
  )
}

export default TimeToday;