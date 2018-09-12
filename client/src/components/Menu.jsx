import React from 'react';
import MenuSection from './MenuSection.jsx';

const Menu = (props) => {
  const showOrHideClass = props.show ? "modal display-block" : "display-none";
  return (
    <div className={showOrHideClass}>
      <section className="modal-main">
        <h4>
          Menu For {props.name}
          <button type="button" className="close" aria-label="Close" onClick={props.hideMenu}>
            <span>&#10005;</span>
          </button>
          <hr />
        </h4>
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