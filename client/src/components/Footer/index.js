import React from 'react';
import {Navbar, FormControl, InputGroup, Button} from 'react-bootstrap';
import './footer.css';


const Footer = props => (

   
<Navbar className="downbar" fixed="bottom" bg="info" >

<InputGroup size="lg" className=" p-2 pl-5 pr-5">
    <FormControl className= "bg-white"
      placeholder= ''
      aria-label="Enter Chat Message"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="dark border pl-5 pr-5">Send</Button>
    </InputGroup.Append>
  </InputGroup>
 

</Navbar>   
 
)

export default Footer;