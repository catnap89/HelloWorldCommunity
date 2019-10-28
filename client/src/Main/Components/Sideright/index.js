
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './sideright.css';

const Sideright =(props) => (

<Card className='col-1 border-0 text-center pl-0 mr-0 pr-0' bg="light">
<Card.Title>

    <ListGroup className="flush" variant="flush border-left">
    
        <ListGroup.Item className='pt-3 p-4 list'>MEMBER
        </ListGroup.Item>

    <ListGroup.Item action variant="light border-0">
        Primary</ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Secondary
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Success
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Danger
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Warning
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Info
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Light
    </ListGroup.Item>
   
    
         

        
        
        
  </ListGroup>
  </Card.Title>
  </Card>

)

export default Sideright;