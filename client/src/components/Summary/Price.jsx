import React from 'react';

const Price = (props) => (
   <div>
    <li>
      <span>Price Range </span>
      <span className="menu-item-text">{props.priceRange}</span>
    </li>
    </div>
)

export default Price;