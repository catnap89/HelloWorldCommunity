import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './top.css';



const Top = (props) => (

  <Navbar className="topbar p-0 border-bottom"  fixed="top" variant="light">
  <Navbar.Brand href="#home">
  <img
       style= {{height: '85px', paddingLeft: '20px'}}
        alt="Logo"
        src="../Chat.png"
          />
  </Navbar.Brand>
  
<p id="demo" className="mb-0 pb-0 pt-4"><em><strong>Lets talk about it...</strong></em></p>

  <Nav className="mr-auto">

    {/* <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
  </Nav>
  <Form inline>
  <Button className="button mr-5" variant="dark">Sign Out</Button><span className="line"> | </span>
    <FormControl type="text" placeholder="Search" className=" p-3 mr-3 ml-5 mr-5 form" /><span className="line"> | </span>
    <Button className ="ml-5 mr-3 button" variant="dark">Search</Button>
  </Form>
</Navbar>
)





export default Top;

