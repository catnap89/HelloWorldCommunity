import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap'
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
  <Navbar.Brand href="#home">
  <img className="imager"
       style= {{height: '80px', paddingLeft: '20px'}}
        alt="Logo"
        src="../Chat.png"
          />
  </Navbar.Brand>
  
  <p id="demo" className="mb-0 pb-0 pt-4"><em><strong>Welcome, {props.username}!</strong></em></p>

  <Nav className="mr-auto">

    {/* <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
  </Nav>
  <Form inline>
   
    {/* <FormControl type="text" placeholder="&#xF002; Search" className=" p-3 mr-3 ml-5 mr-5 form fontAwesome" /><span className="line"> | </span> */}

    <Link to="" className ="pt-4 ml-5 mr-4 links">Register</Link>
    <span className="line pt-4"> | </span>
    <Link to="" className ="pt-4 ml-4 mr-4 links">Sign In</Link>
    {/* <Link to="" className ="pt-4 ml-5 mr-5 links">Favorites</Link> */}
<span className="line pt-4"> | </span>
 <Link to="/login" className="btn btn-dark link-button mr-4 ml-5" variant="dark" onClick={logout}>Sign Out</Link>

  </Form>
</Navbar>
)





export default Top;

