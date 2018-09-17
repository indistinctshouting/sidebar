import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

library.add(faDollarSign);

const Price = (props) => (
  <li className="price-container">
    <div className="summary-icon">
      <FontAwesomeIcon icon="dollar-sign" />
      <FontAwesomeIcon icon="dollar-sign" />
      <FontAwesomeIcon icon="dollar-sign" />
      <FontAwesomeIcon icon="dollar-sign" />
    </div>
    <span className="sum-detail-text">Price Range </span>
    <span className="menu-item-text sum-detail-text">{props.priceRange}</span>
  </li>
)

export default Price;