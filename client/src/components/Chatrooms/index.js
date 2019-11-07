import React from 'react';
import  CardDeck  from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './chatrooms.css';
import Button from 'react-bootstrap/Button';

const Chatrooms = (props) => (


  <CardDeck className= 'col-9 p-3 chat border-0 mt-5 mb-4 mx-auto'>

    <Card className= "cardchat" style={{ maxWidth: '22rem' }}>
      <Card.Header href="" className="pl-3 pt-3 mb-0 chattitle">Car Talk</Card.Header>
       
      <Card.Body className="overflow-auto">

        <Card.Text>
          Come here to talk about cars.Come here to talk about cars.Come here to talk about cars.Come here to talk about cars.Come here to talk about cars.Come here to talk about cars.Come here to talk about cars.Come here to talk about cars.Come here to talk about cars.
        </Card.Text>

      </Card.Body>
      
      <Card.Footer>
      
        <small className="text-muted mr-auto">Moderator : John Smith</small> 
         <Button className="ml-5" variant="link">Join Chat</Button>
      </Card.Footer>
    </Card>

    
  </CardDeck>

)

export default Chatrooms;