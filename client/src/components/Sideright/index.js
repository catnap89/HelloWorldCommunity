import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './sideright.css';

const Sideright = ({children}) => (

  <Card className="col-1 border-0 text-center pl-0 mr-0 pr-0" bg="light">
    <Card.Title>
      <ListGroup className="flush" variant="flush border-left shadow">
        <ListGroup.Item
          className="pt-4 p-4 bg-light border-0 mb-2"
          // action
          variant="bg-light"
        >
          MEMBER
        </ListGroup.Item>
        {children}
      </ListGroup>
    </Card.Title>
  </Card>
);

export default Sideright;