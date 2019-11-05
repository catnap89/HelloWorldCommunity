import React from 'react';
import  CardDeck  from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './chatrooms.css';
import Button from 'react-bootstrap/Button';
const Chatrooms = (props) => (


  <CardDeck className= 'col-9 p-3 chat border-0 mt-5 mb-4 mx-auto'>
  {/* <Card.Title>Chat Rooms Available</Card.Title> */}

    <Card className= "cardchat">
      <Card.Body>
      <Card.Title>Car Talk</Card.Title>
      <hr />
        <Card.Text>
          Come here to talk about cars.
        </Card.Text>

      </Card.Body>
      <Button className="ml-auto mr-2" variant="link">Join Chat</Button>
      <Card.Footer>
        <small className="text-muted mr-auto">Moderator : John Smith</small> 
      </Card.Footer>
    </Card>

    <Card className= "cardchat">
      <Card.Body>
      <Card.Title>Car Talk</Card.Title>
      <hr />
        <Card.Text>
          Come here to talk about cars.
        </Card.Text>

      </Card.Body>
      <Button className="ml-auto mr-2" variant="link">Join Chat</Button>
      <Card.Footer>
        <small className="text-muted">Moderator : John Smith</small>  
      </Card.Footer>
    </Card>

    <Card className= "cardchat">
      <Card.Body>
      <Card.Title>Car Talk</Card.Title>
       <hr />
        <Card.Text>
          Come here to talk about cars.
        </Card.Text>

      </Card.Body>
      <Button className="ml-auto mr-2" variant="link">Join Chat</Button>
      <Card.Footer>
        <small className="text-muted">Moderator : John Smith</small>
      </Card.Footer>
    </Card>
    
  </CardDeck>

)

export default Chatrooms;