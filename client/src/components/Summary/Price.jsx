import React from 'react';

const Price = (props) => (
  <li>
    <span>Price Range </span>
    <span className="menu-item-text">{props.priceRange}</span>
  </li>
)

export default Price;