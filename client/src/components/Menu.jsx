import React from 'react';

const Menu = (props) => {
  const showOrHideClass = props.show? 'modal display-block' : 'modal display-none';
  return (
    <div className={showOrHideClass}>
      <p>HIHIHIHIHIIH</p>
      <button onClick={ props.hideMenu }>CLOSE MENU</button>
    </div>
  )
}

export default Menu;