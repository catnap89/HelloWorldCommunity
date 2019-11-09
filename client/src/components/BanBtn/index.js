import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap'



const BanBtn = props => {
  if (!props.isAdmin) {
    return null;
  }
  return (
    <DropdownButton title="" className="ml-1 border-0"  variant="" size="sm" >
  <Dropdown.Item onClick={props.banUser}>Ban User</Dropdown.Item>
  <Dropdown.Item className="text-muted disabled">Direct Message</Dropdown.Item>

    </DropdownButton>
  );
}



export default BanBtn;