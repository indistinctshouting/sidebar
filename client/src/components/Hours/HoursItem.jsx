import React from 'react';
import style from './Hours.css';

const HoursItem = (props) => {
  let openOrClosedClass = style.checkopen;
  let statusText;
  if (props.isOpen) {
    openOrClosedClass = `${openOrClosedClass} ${style.greentext}`;
    statusText = 'Open Now';
  } else {
    openOrClosedClass = `${openOrClosedClass} ${style.redtext}`;
    statusText = 'Closed Now';
  }

  return(
    <tr>
      <th>
      <span className={`${style.hours} ${style.day}`}>
        {props.day}
      </span>
      </th>
      <td>
        <span className={`${style.hours} ${style.time}`}>
          {props.hours}
        </span>
      </td>
      <td>
        <span className={openOrClosedClass}>
          {(props.day === props.currDay) ? statusText : null}
        </span>
      </td>
    </tr>
  )
}

export default HoursItem;