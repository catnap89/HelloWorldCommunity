import React from 'react';
import Card from 'react-bootstrap/Card';
import './chatrooms.css';
import Button from 'react-bootstrap/Button';

const Chatroom = (props) => (
  <Card className= "cardchat rounded shadow mb-3" key={props.community._id} style={{ minWidth: '22rem', maxWidth: '22rem', maxHeight: '250px'}}>
    <Card.Header 
      href="#"
      className="pl-3 pt-3 mb-0 chattitle"
    > 
      <img 
        className="imagesm mr-2 ml-0 pl-0"
        style= {{height: '45px', paddingLeft: '20px'}}
        alt="Logo"
        src="../Chat.png"
      />
      {props.community.communityName}
    </Card.Header>
    
    <Card.Body className="overflow-auto" >

      <Card.Text>
        {props.community.communityDesc}
      </Card.Text>

    </Card.Body>
    
    <Card.Footer className="d-flex">
      <small className="text-muted mr-auto pt-2">Moderator : {props.community.userAdmin.username}</small> 
      <Button onClick={props.handleJoinCommunity} className="mr-0 pr-0" variant="link">Join Chat</Button>
    </Card.Footer>
  </Card>
)

export default Chatroom;
