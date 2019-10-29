import React from 'react';
import Card  from 'react-bootstrap/Card';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import { FormControl, InputGroup, Button} from 'react-bootstrap';


import './chatbox.css';

const Chatbox = (props) => (
    <Card className= 'col-9 p-3 border-0 mt-2 mb-4'>
        <Card.Body className='chat'>
            <p className='response1'>
            <strong>John says - </strong> Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>

            <p className='response ml-3'>
            <strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>
            <p className='response1'>
            <strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            </p>

            <p className='response ml-3 '>
            <strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>
            <p className='response1'>
            <strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            </p>

            <p className='response ml-3'>
            <strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>

            <p className='response1'>
            <strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            </p>

            <p className='response ml-3 '>
            <strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>
            <p className='response1'>
            <strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            </p>

            <p className='response ml-3'>
            <strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>
            <p className='response1'>
            <strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            </p>

            <p className='response ml-3 '>
            <strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>
            <p className='response1'>
            <strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            </p>

            <p className='response ml-3'>
            <strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>

            <p className='response1'>
            <strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            </p>

            <p className='response ml-3 '>
            <strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p>
            <p className='response1'>
            <strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            </p>

            <p className='response ml-3'>
            <strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.  
            </p> 
        </Card.Body>

        <Card.Footer className="text-muted bg-white border-0 mt-3">

            <InputGroup size="lg" className="mb-3">
            <FormControl
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-secondary pl-5 pr-5">Send</Button>
            </InputGroup.Append>
            </InputGroup>
        </Card.Footer>
    </Card>
)

export default Chatbox;