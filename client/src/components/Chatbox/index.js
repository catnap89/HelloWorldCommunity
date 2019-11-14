import React from 'react';
// import Card  from 'react-bootstrap/Card';
// import { FormControl, InputGroup, Button} from 'react-bootstrap';


import './chatbox.css';

const Chatbox = (props) => (

    <div id="person1" className=" ml-auto mr-3" key={props.message.messageId}>

        <p className='response1 speech-bubble p-1 pl-2'><i className="fas fa-fish fa-xs"></i>
        <strong className="pr-2"> {props.message.username}:  </strong>{props.message.message}
        </p>     

    </div>

    
)

export default Chatbox;


// code for chat with 1 screen

