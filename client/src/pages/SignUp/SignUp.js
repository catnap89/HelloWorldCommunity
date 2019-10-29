import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import './signup.css';

const SignUp = (props) => (

<CardDeck className= 'col-12 p-3 chat border-0 mt-5 mb-4 mx-auto'>
<Card className="col-4 bg-light">
     
    <Card.Title className="pt-4 pl-2 mb-0">Sign Up / Register</Card.Title>
     <hr />
     <br />

<Form>


  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email:</Form.Label>
      <Form.Control className="form" type="email" placeholder="Enter email" />
    </Form.Group>
<br />
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password:</Form.Label>
      <Form.Control className="form" type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <br />
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address:</Form.Label>
    <Form.Control className="form" placeholder="1234 Main St" />
  </Form.Group>
  <br />
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2:</Form.Label>
    <Form.Control className="form" placeholder="Apartment, studio, or floor" />
  </Form.Group>
<br />
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City:</Form.Label>
      <Form.Control className="form" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State:</Form.Label>
      <Form.Control className="form" as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip:</Form.Label>
      <Form.Control className="form" />
    </Form.Group>
  </Form.Row>

  {/* <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
<br />
  <Button className="button mr-4" variant="dark" type="submit">
    Submit
  </Button>
  <a href="/"> Sign In</a>

  </Form>


  
</Card>


<Card className="col-8 cha text-center pt-5">
  <Card.Text>
  <Card.Img src="../Chat.png" alt="Logo" className="image mb-5" style= {{height: '200px', width:'200px'}}/>
   <h3>Please Register and Create your profile to enjoy <strong>Ch@</strong>. 
   <br />
   <br />We hope you have a Wonderful time.</h3>
        <h5 className="p-4">The Dev Team:</h5>
        <ul className="list-unstyled">
<li>Daniel Cho</li>
<li>Khavin Lindo</li>
<li>Ryan Weingart</li>
<li>Trey Helmer</li>


        </ul>

 </Card.Text>
</Card>
</CardDeck>





)

export default SignUp;