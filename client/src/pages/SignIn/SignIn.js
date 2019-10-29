import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';

import Card from 'react-bootstrap/Card';

import './signin.css';

const SignIn =(props) => (
  <CardDeck className= 'col-12 p-3 chat border-0 mt-5 mb-4 mx-auto'>
    <Card className="col-4 bg-light">
     
    <Card.Title className="pt-3">Sign In</Card.Title>
     <hr />
     <br />
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address:</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
<br />
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    {/* <Form.Check type="checkbox" label="Check me out" /> */}
  </Form.Group>
  <br />
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
</Card>




<Card className="col-8 cha text-center pt-5">
  <Card.Text>
  <Card.Img src="../Chat.png" alt="Logo" className="image mb-5" style= {{height: '200px', width:'200px'}}/>
   <h3>Welcome back!! Please Log-in to enter <strong>Ch@</strong>.</h3>
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

export default SignIn;