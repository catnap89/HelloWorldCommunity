import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './side.css';

const Side =(props) => (


  <Card className='col-2 pr-0 ml-0 pl-0 border-0' bg="light">

    <Card.Title>

    <ListGroup className="flush" variant="flush border-right shadow">
    
      <ListGroup.Item className='pt-3 p-4 channel bg-light text-center' >
        <Button variant="outline-primary" size="lg" as={Link} to="/createchat">
        START NEW CHAT
        </Button>
      </ListGroup.Item>

       <ListGroup.Item className="bg-light pl-5" action variant="light border-0" as={Link} to="/community/:id">
        Chat / Main
      </ListGroup.Item>

      <ListGroup.Item className="bg-light pl-5" action variant="light border-0" as={Link} to="/">
        Chatrooms
      </ListGroup.Item>

      
      {/* <ListGroup.Item className="bg-light pl-5" action variant="light border-0" as={Link} to="/">
        About Us
      </ListGroup.Item>

      <ListGroup.Item className="bg-light pl-5" action variant="light border-0" as={Link} to="/">
        Contact Us
      </ListGroup.Item> */}

      <ListGroup.Item className="bg-light pl-5" action variant="light border-0" as={Link} to="/">
        Favorites
      </ListGroup.Item>
      <ul className="favList list-unstyled pl-5">
        <li className="favItems pb-2"><a href="/community/:id">link1</a></li>
        <li className="favItems pb-2"><a href="/community/:id">link1</a></li>
        <li className="favItems pb-2"><a href="/community/:id">link1</a></li>
        <li className="favItems pb-2"><a href="/community/:id">link1</a></li>
      </ul>

      {/* <ListGroup.Item className="bg-light" action variant="light border-0">
        Info
      </ListGroup.Item>

      <ListGroup.Item className="bg-light" action variant="light border-0">
        Light
      </ListGroup.Item> */}
    
    </ListGroup>
    
    </Card.Title>
  </Card>

)

export default Side;