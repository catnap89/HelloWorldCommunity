import React from 'react';
import Card  from 'react-bootstrap/Card';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import { FormControl, InputGroup, Button} from 'react-bootstrap';


import './chatbox.css';

const ChatboxIm = (props) => (

    // code for chat with 2 (split) windows (Instant 1 on 1 messagaging)

    <Card className= 'col-9 p-2 border-0 chat mt-3 mb-1 mx-auto'>

        <Card.Header as="h5" className="bg-white">Chat Title</Card.Header>

        <Card.Body className='scroll'>

        <Card.Text id="person1" className=" ml-auto col-5">
            <p className='response1 speech-bubble p-3'>
            <strong>John - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>    

            <p className='response1 speech-bubble p-3'>
            <strong>John - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.  Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>    

            <p className='response1 speech-bubble p-3'>
            <strong>John - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>    

         

        </Card.Text>

        <Card.Text id="person2" className="mr-auto col-5">
         
            <p className='response speech-bubble-left p-3'>
            <strong>Kate - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, LContrary to popular belief, Lorem Ipsum is not simply random text.  orem Ipsum is not simply random text.   
            </p>
         
        </Card.Text>

        </Card.Body>

        <Card.Footer fixed="bottom" className="text-muted bg-white border-0 mt-2">
 <label for="input" className="Input-label mut pl-2">say something</label> <i className="far fa-comment fa-sm mut"></i>
            <InputGroup size="lg" className="mb-0 shadow-sm"> 
            <FormControl className="bg-light" 
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            /> 
            <InputGroup.Append>
                <Button variant="dark border pl-5 pr-5">Send</Button>
            </InputGroup.Append>
            </InputGroup> 
        </Card.Footer>
    </Card>
)

export default ChatboxIm;


// code for chat with 1 screen

