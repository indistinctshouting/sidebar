import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const HoursItem = (props) => {
  if (props.today) {
    // check if today, then check if hour is open / closed
  }
  return(
    <tr>
      <th className="hours day">
        {props.day}
      </th>
      <td>
        <span className="hours time">
          {props.hours}
        </span>
      </td>
    </tr>
  )
  // <div>
  //   <h4>{props.day} {props.hours}</h4>
  // </div>
}

export default HoursItem;