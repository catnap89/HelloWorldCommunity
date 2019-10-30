import React from 'react';
import Card  from 'react-bootstrap/Card';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import { FormControl, InputGroup, Button} from 'react-bootstrap';


import './chatbox.css';

const Chatbox = (props) => (
    <Card className= 'col-9 p-3 border chat mt-5 mb-4 mx-auto scroll'>
<Card.Body className='scroll'>
        <Card.Text className=" ml-auto col-5">
            <p className='response1 speech-bubble p-4'>
            <strong>John - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>    

        </Card.Text>

        <Card.Text className="mr-auto col-5">
         
            <p className='response speech-bubble-left p-4'>
            <strong>Kate - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>
         
        </Card.Text>

        </Card.Body>

        <Card.Footer fixed="bottom" className="text-muted bg-white border-0 mt-3">

            <InputGroup size="lg" className="mb-3">
            <FormControl
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

export default Chatbox;