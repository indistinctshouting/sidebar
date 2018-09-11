import React from 'react';
import MenuSection from './MenuSection.jsx';

const Menu = (props) => {
  const showOrHideClass = props.show? 'modal display-block' : 'modal display-none';
  return (
    <div className={showOrHideClass}>
      {Object.keys(props.menuInfo).map(section => <MenuSection key={section} section={section} items={props.menuInfo.section}/>)}
      <button onClick={props.hideMenu}>CLOSE MENU</button>
    </div>
  )
}

export default Menu;