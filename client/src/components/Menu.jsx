import React from 'react';
import MenuSection from './MenuSection.jsx';
import { Modal } from 'react-bootstrap';

const Menu = (props) => {
  return (
    <Modal show={props.show} onHide={props.hideMenu}>
      <Modal.Header closeButton>
        <Modal.Title>Menu for {props.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {Object.keys(props.menuInfo).map(section => 
          <MenuSection 
            key={section} 
            section={section} 
            items={props.menuInfo[section]}
          />
        )}
        <button onClick={props.hideMenu}>CLOSE MENU</button>
      </Modal.Body>
    </Modal>
  )
}

export default Menu;