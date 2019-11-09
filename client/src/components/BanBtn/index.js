import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Card from 'react-bootstrap/Card';
// import './sideright.css';
import Button from 'react-bootstrap/Button'

const BanBtn = props => {
  if (!props.isAdmin) {
    return null;
  }
  return (
    <Button variant="primary" size="sm" onClic={props.banUser}>
      <i class="fas fa-ban"></i>
    </Button>
  );
}



export default BanBtn;