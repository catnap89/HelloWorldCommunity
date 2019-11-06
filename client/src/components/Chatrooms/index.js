import React from 'react';
import  CardDeck  from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './chatrooms.css';
import Button from 'react-bootstrap/Button';

const Chatrooms = (props) => (


  <CardDeck className= 'col-9 p-3 chat border-0 mt-5 mb-4 mx-auto'>
  {/* <Card.Title>Chat Rooms Available</Card.Title> */}

  {/* card 1 */}

    <Card className= "cardchat" style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>Car Talk</Card.Title>
      <hr />
        <Card.Text >
          Come here to talk about cars.
        </Card.Text>

      </Card.Body>
      <Button className="ml-auto mr-2" variant="link">Join Chat</Button>
      <Card.Footer>
        <small className="text-muted mr-auto">Moderator : John Smith</small> 
      </Card.Footer>
    </Card>

  {/* card 2 */}

    <Card className= "cardchat" style={{ width: '18rem' }}>
       <Card.Body >
      <Card.Title>Car Talk</Card.Title>
     
      <hr />
        <Card.Text >
          Come here to talk about cars.Come here to talk about cars.
        </Card.Text>

      </Card.Body>
      <Button className="ml-auto mr-2" variant="link">Join Chat</Button>
      <Card.Footer>
        <small className="text-muted">Moderator : John Smith</small>  
      </Card.Footer>
    </Card>

{/* card 3 */}

    <Card className= "cardchat" style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>Car Talk</Card.Title>
       <hr />
        <Card.Text >
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