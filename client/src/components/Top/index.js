import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './top.css';

const Top = (props) => (

  <Navbar className="topbar p-0 border-bottom" bg="info" fixed="top" variant="light">
  <Navbar.Brand href="#home">
  <img
       style= {{height: '85px', paddingLeft: '20px'}}
        alt="Logo"
        src="../Chat.png"
          />
  </Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
  <Form inline>
  <Button variant="dark mr-5 border">Sign Out</Button><span> | </span>
    <FormControl type="text" placeholder="Search" className="mr-sm-3 ml-5" />
    <Button className ="mr-3" variant="outline-dark">Search</Button>
  </Form>
</Navbar>
)

export default Top;