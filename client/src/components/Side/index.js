
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './side.css';

const Side =(props) => (


  <Card className='col-2 pr-0 ml-0 pl-0 border-0 text-center' bg="light">

    <Card.Title>

    <ListGroup className="flush" variant="flush border-right shadow">
    
      <ListGroup.Item className='pt-3 p-4 channel bg-light' action as={Link} to="/createchat">
      <Button variant="outline-primary" size="lg">
      START NEW CHAT
    </Button>
        
      </ListGroup.Item>

      <ListGroup.Item className="bg-light" action variant="bg-light border-0" as={Link} to="/signup">
        Sign Up / Register
      </ListGroup.Item>

      <ListGroup.Item className="bg-light" action variant="bg-light border-0" as={Link} to="/">
        Sign In
      </ListGroup.Item>


      <ListGroup.Item className="bg-light" action variant="light border-0" as={Link} to="/community/:id">
        Chat / Main
      </ListGroup.Item>

      

      <ListGroup.Item className="bg-light" action variant="light border-0">
        Danger
      </ListGroup.Item>

      <ListGroup.Item className="bg-light" action variant="light border-0">
        Warning
      </ListGroup.Item>

      <ListGroup.Item className="bg-light" action variant="light border-0">
        Info
      </ListGroup.Item>

      <ListGroup.Item className="bg-light" action variant="light border-0">
        Light
      </ListGroup.Item>
    
    </ListGroup>
    
    </Card.Title>
  </Card>


)

export default Side;