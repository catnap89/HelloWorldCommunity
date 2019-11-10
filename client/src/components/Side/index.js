import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './side.css';

const Side = props => (
  <Card className="col-2 pr-0 ml-0 pl-0 border-0" bg="light">
    <Card.Title>
      <ListGroup className="flush" variant="flush border-right shadow">
        <ListGroup.Item className="pt-5 p-4 channel bg-light text-center border-0">
          <Button
            variant="outline-primary"
            size="lg"
            as={Link}
            to="/createchat"
          >
            START NEW CHAT
          </Button>
        </ListGroup.Item>

        <ListGroup.Item
          className="bg-light pl-5 mt-4"
          action
          variant="light border-0"
          as={Link}
          to="/"
        >
          All Communities
        </ListGroup.Item>


        <ListGroup.Item
          className="bg-light pl-5"
          action
          variant="light border-0"
          as={Link}
          to="/favoriteCommunities"
        >
          Favorite Communities
        </ListGroup.Item>

       
      </ListGroup>

    </Card.Title>
  </Card>
);

export default Side;