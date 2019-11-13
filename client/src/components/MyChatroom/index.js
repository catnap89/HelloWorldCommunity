import React from 'react';
import Card from 'react-bootstrap/Card';
import './mychatroom.css';
import Button from 'react-bootstrap/Button';

const MyChatroom = (props) => (
  <Card className= "cardchat rounded shadow mb-3" key={props.community._id} style={{ minWidth: '22rem', maxWidth: '22rem', maxHeight: '250px'}}>
    <Card.Header href="#" className="d-flex pl-3 pt-3 mb-0 chattitle">
      <img className="imagesm mr-2 ml-0 pl-0"
        style= {{height: '45px', paddingLeft: '20px'}}
        alt="Logo"
        src="../Chat.png"
      />
      {props.community.communityName}
      <i className="fas fa-heart ml-auto pt-1 pr-1" title="UnLike"></i>
    </Card.Header>
    
    <Card.Body className="overflow-auto" >

      <Card.Text>
        {props.community.communityDesc}
      </Card.Text>

    </Card.Body>
    
    <Card.Footer className="d-flex">
      <Button onClick={props.handleRemoveCommunity} className="mr-5 pr-0" variant="link">Remove</Button> 
      <Button onClick={props.handleJoinCommunity} className="mr-0 ml-5 pr-0" variant="link">Join Chat</Button>
    </Card.Footer>
  </Card>
)

export default MyChatroom;