import React from 'react';
import Card  from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap';


import './createchatform.css';

const CreateChatForm = (props) => (

<Card className="col-4 bg-light shadow">
            
            <Card.Title className="pt-4 pl-2 mb-0">Create New Ch@</Card.Title>
            <hr />
            <br />
            {/* <p>{this.state.errorMessage}</p> */}
  
            <Form>
  
              <Form.Group as={Col} controlId="formGridChatName">
                <Form.Label><i className="fas fa-plus-circle pl-2 pr-2"></i>Ch@ Name</Form.Label>
                <Form.Control 
                  className="form" 
                //   type="email" 
                  placeholder="Enter Ch@ Name"
                //   value={this.state.email}
                //   onChange={this.handleInputChange}
                  name="chatName" 
                />
              </Form.Group>
              <br />
              <Form.Group as={Col} controlId="formGridAddUsers">
                <Form.Label><i className="fas fa-user pl-2 pr-2"></i>Add Ch@ers</Form.Label>
                <Form.Control
                  className="form" 
                //   type="username" 
                  placeholder="Add Users" 
                //   value={this.state.username}
                //   onChange={this.handleInputChange}
                  name="addUsers"
                />
              </Form.Group>
              <br />
              <Form.Group as={Col} controlId="formGridChatDescription">
                <Form.Label><i className="fas fa-info-circle pl-2 pr-2"></i>Ch@ Description</Form.Label>
                <Form.Control 
                  className="form" 
                //   type="password" 
                  placeholder="Description" 
                //   value={this.state.password}
                //   onChange={this.handleInputChange}
                  name="chatDescription"
                />
              </Form.Group>
  
              <br />
  
              <Button 
                className="button mr-4 ml-3" 
                variant="dark" 
                type="submit"
                // onClick={this.handleFormSubmit}
              >
                Submit
              </Button>
  
              
            </Form>
  
          </Card>
)

export default CreateChatForm;