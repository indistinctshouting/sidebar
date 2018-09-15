import React from 'react';

const MenuButton = (props) => (
  <li>
    <a onClick={props.showMenu} className="menu-item-text">Full Menu</a>
  </li>
)

export default MenuButton;