import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './top.css';
import axios from 'axios';
import { Link } from "react-router-dom";



const logout = () => {
  axios.get('/auth/logout')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

const Top = (props) => (

  <Navbar className="topbar p-0 border-bottom"  fixed="top" variant="light">
  <Navbar.Brand href="/">
  <img className="imager"
       style= {{height: '85px', paddingLeft: '20px'}}
        alt="Logo"
        src="../Chat.png"
          />
  </Navbar.Brand>
  
  <p id="demo" className="mb-0 pb-0 pt-4"><em><strong>welcome, {props.username}!</strong></em></p>

  <Nav className="mr-auto">

    {/* <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
  </Nav>
  <Form inline>
    <Link to="/login" className="btn btn-dark link-button mr-5" variant="dark" onClick={logout}>Sign Out</Link><span className="line"> | </span>
    <FormControl type="text" placeholder="&#xF002; Search" className=" p-3 mr-3 ml-5 mr-5 form fontAwesome" /><span className="line"> | </span>
    <Button className ="ml-5 mr-3 button" variant="dark">Search</Button>
  </Form>
</Navbar>
)





export default Top;

