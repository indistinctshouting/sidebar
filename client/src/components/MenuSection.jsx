import React from 'react';
import MenuItem from './MenuItem.jsx'

const MenuSection = (props) => {
  return (
    <div>
      {props.section}
      {props.items.map(item => <MenuItem key={item.item_name} details={item}/>)}
    </div>
  )
}

export default MenuSection;