import React from 'react';
import { Media } from 'react-bootstrap';

let emptyImage = "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png";

// Need to pull image from props.details.photo_url but
// creating image tags from the url is taking too long

const MenuItem = (props) => {
  return (
    <div>
      <hr/>
      <Media>
        <Media.Left align="middle">
          <img width={50} height={50} src={emptyImage} alt="thumbnail"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading componentClass="h5">{props.details.item_name}</Media.Heading>
          <Media.Heading componentClass="h5">${props.details.item_price}</Media.Heading>
          <p>{props.details.item_description}</p>
        </Media.Body>
      </Media>
    </div>
  )
}
export default MenuItem
