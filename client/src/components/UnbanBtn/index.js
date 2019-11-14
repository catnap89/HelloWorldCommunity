import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap'

import './unbanbtn.css';

const UnbanBtn = props => {

  return (
    <DropdownButton title="" className="ml-3 mr-1 border-0"  variant="" size="sm" >

      <Dropdown.Item onClick={props.unbanUser}><i className="fas fa-ban pr-2"></i>UnBan User</Dropdown.Item>
      
    </DropdownButton>
  );
}



export default UnbanBtn;