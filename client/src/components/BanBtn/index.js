import React from 'react';
import Button from 'react-bootstrap/Button'

const BanBtn = props => {
  if (!props.isAdmin) {
    return null;
  }
  return (
    <Button variant="primary" size="sm" onClick={props.banUser}>
      <i className="fas fa-ban"></i>
    </Button>
  );
}



export default BanBtn;