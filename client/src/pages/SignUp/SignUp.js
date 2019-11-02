import React, {Component} from 'react';
// import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import './signup.css';

class SignUp extends Component  {
  state = {
    username: "",
    email: "",
    password: "",
    errorMessage: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Username: " + this.state.username+ " Eamil: " + this.state.email + " Password: " + this.state.password);
    //next step is to make an axios.post using the email and password that our user enters
    const userInfo = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
    axios.post("/authentication/signup", userInfo)
      .then((response) => {
        console.log(response.data);
        // when signup is successful, go to signin page
        this.props.history.push("/signin");
      })
      .catch(error => {
        this.setState({
          errorMessage: error.response.data.message
        })
      })
  };

  render() {

    return(
      <CardDeck className= 'col-12 p-3 chat border-0 mt-5 mb-4 mx-auto'>

        <Card className="col-4 bg-light shadow">
            
          <Card.Title className="pt-4 pl-2 mb-0">Sign Up / Register</Card.Title>
          <hr />
          <br />
          <p>{this.state.errorMessage}</p>

          <Form>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label><i class="fas fa-envelope pl-2 pr-2"></i>Email</Form.Label>
              <Form.Control 
                className="form" 
                type="email" 
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email" 
              />
            </Form.Group>
            <br />
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label><i class="fas fa-user pl-2 pr-2"></i>Username</Form.Label>
              <Form.Control
                className="form" 
                type="username" 
                placeholder="Enter username" 
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
              />
            </Form.Group>
            <br />
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label><i class="fas fa-key pl-2 pr-2"></i>Password</Form.Label>
              <Form.Control 
                className="form" 
                type="password" 
                placeholder="Password" 
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
              />
            </Form.Group>

            <br />

            <Button 
              className="button mr-4" 
              variant="dark" 
              type="submit"
              onClick={this.handleFormSubmit}
            >
              Submit
            </Button>

            <a href="/signin"> Sign In</a>
            
          </Form>

        </Card>


        <Card className="col-8 cha text-center pt-5 shadow">
          <Card.Body>
          <Card.Img src="../Chat.png" alt="Logo" className="image mb-5" style= {{height: '200px', width:'200px'}}/>
            <h3>Please Register and Create your profile to enjoy <strong>Ch@</strong>. 
            <br />
            <br />
            We hope you have a Wonderful time.
            </h3>
            <h5 className="p-4">The Dev Team:</h5>
            <ul className="list-unstyled">
              <li>Daniel Cho</li>
              <li>Khavin Lindo</li>
              <li>Ryan Weingart</li>
              <li>Trey Helmer</li>
            </ul>

          </Card.Body>
        </Card>

      </CardDeck>

    )
  }

}






export default SignUp;