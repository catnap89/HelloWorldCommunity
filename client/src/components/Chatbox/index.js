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
            <InputGroup size="lg" className=" p-2 pl-5 pr-5">
                <FormControl className= "bg-white"
                placeholder= ''
                aria-label="Enter Chat Message"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="dark border pl-5 pr-5">Send</Button>
                </InputGroup.Append>
            </InputGroup>
            {/*  */}
            <InputGroup size="lg">
                <InputGroup.Prepend>
                <InputGroup.Text>Chat here</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Card.Footer>
    </Card>
)

export default Chatbox;