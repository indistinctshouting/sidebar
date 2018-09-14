import React from 'react';

const HoursItem = (props) => {
  let openOrClosedClass = 'check-open';
  let statusText;
  if (props.currDay === props.day) {
    if (props.isOpen) {
      openOrClosedClass = openOrClosedClass + ' green-text';
      statusText = 'Open Now';
    } else {
      openOrClosedClass = openOrClosedClass + ' red-text';
      statusText = 'Closed Now';
    }
  }

  return(
    <tr>
      <th className="hours day">
        {props.day}
      </th>
      <td className="hours time">
        <span>
          {props.hours}
        </span>
      </td>
      <td className={openOrClosedClass}>
        <span>
          {(props.day === props.currDay) ? statusText : null}
        </span>
      </td>
    </tr>
  )
}

export default HoursItem;