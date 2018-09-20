import React from 'react';
import MenuItem from './MenuItem.jsx';
import style from './Menu.css';

const MenuSection = (props) => {
  return (
    <div>
      <h3><span className={style.secname}>{props.section}</span></h3>
      {props.items.map(item => 
        <MenuItem 
          key={item.item_name} 
          details={item}
        />
      )}
      <br></br>
    </div>
  )
}

export default MenuSection;