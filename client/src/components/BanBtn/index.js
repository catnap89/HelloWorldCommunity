import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap'

import './BanBtn.css';

const BanBtn = props => {
  if (!props.isAdmin) {
    return (
    <DropdownButton title={<span><i className="fas fa-user fa-sm userlist"> </i> </span>} className="ml-3 mr-1 border-0"  variant="link-dark"  >

        <Dropdown.Item className="text-muted disabled">Send Message</Dropdown.Item>
        <Dropdown.Item className="text-muted disabled">Add Friend</Dropdown.Item>
  
      </DropdownButton>
    )
  }
  return (
    <DropdownButton title={<span><i className="fas fa-user fa-sm userlist"> </i> </span>} className="ml-3 mr-1 border-0"  variant="" size="sm" >

      <Dropdown.Item onClick={props.banUser}><i className="fas fa-ban pr-2"></i>Ban User</Dropdown.Item>
      <Dropdown.Item className="text-muted disabled"><i className="fas fa-share pr-2 userlist2"></i>Send Message</Dropdown.Item>
      <Dropdown.Item className="text-muted disabled"><i className="fas fa-user-plus pr-2 userlist2"></i>Add Friend</Dropdown.Item>
  
    </DropdownButton>
  );
}



export default BanBtn;