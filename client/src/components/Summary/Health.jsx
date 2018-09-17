import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusSquare);

const Health = (props) => (
  <li className="health-container">
    <div className="summary-icon">
      <FontAwesomeIcon icon="plus-square"/>
    </div>
    <span className="blue-text menu-item-text sum-detail-text">Health Score </span>
    <span className="menu-item-text sum-detail-text">{props.score} out of 100</span>
  </li>
)

export default Health