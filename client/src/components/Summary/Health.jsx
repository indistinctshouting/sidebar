import React from 'react';

const Health = (props) => (
  <li>
    <span className="blue-text menu-item-text">Health Score </span>
    <span className="menu-item-text">{props.score} out of 100</span>
  </li>
)

export default Health