import React from 'react';
import MenuSection from './MenuSection.jsx';
import style from './Menu.css';

const Menu = (props) => {
  const showOrHideClass = (props.show) ? `${style.modal} ${style.displayblock}` : `${style.displaynone}`;
  return (
    <div className={showOrHideClass}>
      <section className={style.modalmain}>
        <h3>
          <span className={style.resname}>Menu For {props.name}</span>
          <button type="button" className={style.close} aria-label="Close" onClick={props.hideMenu}>
            <span>&#10005;</span>
          </button>
          <hr />
        </h3>
        {Object.keys(props.menuInfo).map(section =>
          <MenuSection
            key={section}
            section={section}
            items={props.menuInfo[section]}
          />
        )}
        <button onClick={props.hideMenu}>Close</button>
      </section>
    </div>
  )
}

export default Menu;