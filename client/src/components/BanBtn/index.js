import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap'

import './BanBtn.css';

const BanBtn = props => {
  if (!props.isAdmin) {
    return (
      <DropdownButton title="" className="ml-3 mr-2 border-0"  variant="" size="sm" >

        <Dropdown.Item className="text-muted disabled">Send Message</Dropdown.Item>
        <Dropdown.Item className="text-muted disabled">Add Friend</Dropdown.Item>
  
      </DropdownButton>
    )
  }
  return (
    <DropdownButton title="" className="ml-3 mr-2 border-0"  variant="" size="sm" >

      <Dropdown.Item onClick={props.banUser}><i className="fas fa-ban pr-2"></i>Ban User</Dropdown.Item>
      <Dropdown.Item className="text-muted disabled">Send Message</Dropdown.Item>
      <Dropdown.Item className="text-muted disabled">Add Friend</Dropdown.Item>
  
    </DropdownButton>
  );
}



export default BanBtn;