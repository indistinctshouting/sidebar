import React from 'react';

const MenuItem = (props) => {
  return (
    <div>
      {props.details.photo_url}
      {props.details.item_name}
      {props.details.item_price}
      {props.details.item_description}
      {props.details.item_price}
    </div>
  )
}

export default MenuItem