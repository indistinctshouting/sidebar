import React from 'react';

const MenuSection = (props) => {
  return (
    <div>
      {props.section}
      {props.items}
    </div>
  )
}

export default MenuSection;