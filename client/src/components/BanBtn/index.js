import React from 'react';
import Button from 'react-bootstrap/Button'



const BanBtn = props => {
  if (!props.isAdmin) {
    return null;
  }
  return (
    <Button className="ml-1 border-0" variant="outline-danger" data-toggle="tooltip" title="Ban User" size="sm" onClick={props.banUser}><i className="fas fa-ban pb-1 fa=lg"></i>
    </Button>
  );
}



export default BanBtn;