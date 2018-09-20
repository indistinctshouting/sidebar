import React from 'react';
import style from './Menu.css';

let emptyImage = "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png";

const MenuItem = (props) => {
  return (
    <div>
      <hr></hr>
      <div className={style.menuitem}>
        <div className={style.foodpic}>
          <img width={70} height={70} src={emptyImage} className={style.food} alt="thumbnail" />
        </div>
        <div className={style.foodinfo}>
          <div className={style.namecontainer}>
            <strong className={style.bluetext}>{props.details.item_name}</strong>
              <div className={style.price}>
                <strong>
                  ${props.details.item_price}
                </strong>
              </div>
          </div>
          <p>{props.details.item_description}</p>
        </div>
      </div>
    </div>
  )
}
export default MenuItem
