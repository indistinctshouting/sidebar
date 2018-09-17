import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

library.add(faUtensils);

const MenuButton = (props) => (
  <li className="menu-button-container">
    <div className="summary-icon">
      <FontAwesomeIcon icon="utensils"/>
    </div>
    <a onClick={props.showMenu} className="menu-item-text"> Full Menu</a>
  </li>
)

export default MenuButton;