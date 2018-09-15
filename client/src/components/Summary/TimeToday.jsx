import React from 'react';

const TimeToday = (props) => {
  let openOrClosedClass = 'check-open';
  let statusText;
  if (props.isOpen) {
    openOrClosedClass = openOrClosedClass + ' green-text';
    statusText = 'Open Now';
  } else {
    openOrClosedClass = openOrClosedClass + ' red-text';
    statusText = 'Closed Now';
  }

  return (
    <li>
      <span>Today</span>
      <span className="menu-item-text"> {props.times}</span>
      <span className={openOrClosedClass + " menu-item-text"}> {statusText}</span>
    </li>
  )
}

export default TimeToday;