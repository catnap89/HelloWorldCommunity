import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './sideright.css';
import BanBtn from '../BanBtn';

const Sideright = props => (
  <Card className="col-1 border-0 text-center pl-0 mr-0 pr-0" bg="light">
    <Card.Title>
      <ListGroup className="flush" variant="flush border-left shadow">
        <ListGroup.Item
        
          className="pt-4 p-4 bg-light border-0"
          // action
          variant="bg-light"
        >
          MEMBER
        </ListGroup.Item>

        <ul className="memList list-unstyled">
  
            <li className="memItems pb-2">{props.participants}</li> <BanBtn></BanBtn>
     
            <li className="memItems pb-2">Name2</li> <BanBtn></BanBtn>

            <li className="memItems pb-2">Name3</li> <BanBtn></BanBtn>

            <li className="memItems pb-2">Name4</li> <BanBtn></BanBtn>

        </ul>

        {/* <ListGroup.Item className="bg-light" action variant="bg-light border-0">
          Primary
        </ListGroup.Item>
        <ListGroup.Item className="bg-light" action variant="bg-light border-0">
          Secondary
        </ListGroup.Item>
        <ListGroup.Item className="bg-light" action variant="bg-light border-0">
          Success
        </ListGroup.Item>
        <ListGroup.Item className="bg-light" action variant="bg-light border-0">
          Danger
        </ListGroup.Item> */}
        {/* <ListGroup.Item className="bg-light" action variant="bg-light border-0">
      Warning
    </ListGroup.Item>
    <ListGroup.Item className="bg-light" action variant="bg-light border-0">
      Info
    </ListGroup.Item>
    <ListGroup.Item className="bg-light" action variant="bg-light border-0">
      Light
    </ListGroup.Item>
    */}
      </ListGroup>
    </Card.Title>
  </Card>
);

export default Sideright;