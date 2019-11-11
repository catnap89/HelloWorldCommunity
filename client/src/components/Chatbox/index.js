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

    // code for chat with 2 (split) windows

    // <Card className= 'col-9 p-1 border-0 chat mt-3 mb-0 mx-auto'>

    //     <Card.Header as="h5" className="bg-white">Chat Title</Card.Header>

    //     <Card.Body className='scroll'>

    //     <div id="person1" className=" ml-auto mr-3">

    //         <p className='response1 speech-bubble p-1'>
    //         <strong>John - </strong>Contrary to popular belief, Lorem Ipsum is not simply random sdsdfsdsf text.
    //         </p>     

    //         <p className='response1 speech-bubble p-1'>
    //         <strong>John - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.  Contrary to popular belief, Lorem Ipsum is not simply random text.  
    //         </p>    

    //         <p className='response1 speech-bubble p-1'>
    //         <strong>John - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.
    //         </p>    
           
    //     </div>

    //     </Card.Body>

    //     <Card.Footer fixed="bottom" className="text-muted bg-white border-0 mt-0 pt-0">

    //         <InputGroup size="lg" className="mb-0 shadow-sm fontAwesome"> 
    //         <FormControl 
    //             className="bg-light" 
    //             autoFocus="autofocus" 
    //             placeholder="say something...&#xF075;"
    //             onChange={props.handleInputChange}
    //             value={props.value}
    //             name={props.name}
    //         /> 
    //         <InputGroup.Append>
    //             <Button 
    //                 variant="dark border pl-3 pr-3"
    //                 onClick={props.handleFormSubmit}
    //             >
    //                 <i className="fas fa-share pr-2"></i>
    //                 Send
    //             </Button>
    //         </InputGroup.Append>
    //         </InputGroup> 
    //     </Card.Footer>
    // </Card>
)

export default Chatbox;


// code for chat with 1 screen

