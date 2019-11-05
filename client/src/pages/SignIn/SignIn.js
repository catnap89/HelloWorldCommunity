import React, {Component} from 'react';
// import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './signin.css';
import axios from 'axios';


class SignIn extends Component {

  state = {
    password: "",
    username: "",
    errorMessage: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
      event.preventDefault();
      //next step is to make an axios.post using the email and password that our user enters
      const userInfo = {
        username: this.state.username,
        password: this.state.password
      }
      axios.post("/auth/login", userInfo)
        .then((response) => {
          // console.log(response.data);
          // route to Profile View
          this.props.history.push("/");
        })
        .catch(error => {
          throw error;
        })
    };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   //next step is to make an axios.post using the email and password that our user enters
  //   const userInfo = {
  //     username: this.state.username,
  //     password: this.state.password
  //   }
  //   axios.post("/auth/login", userInfo)
  //     .then((response) => {
  //       this.props.history.push("/");
  //     })
  //     .catch(error => {
  //       // console.log("error: " + error.response.data.message);
  //       this.setState({
  //         errorMessage: error.response.data.message
  //       });
  //       alert(error.response.data.message);
  //     })
  // };

  render() {

    return (
      <CardDeck className= 'col-12 chat border-0 mt-5 mb-4 mx-auto'>
        {/* this is the left card of the Sign In page that has form for email/password and submit button */}
        <Card className="col-4 bg-light shadow">
        
          <Card.Title className="pt-4 pl-2 mb-0">Sign In</Card.Title>
          <hr />
          <br />
          <p>{this.state.errorMessage}</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label><i className="fas fa-user pl-2 pr-2"></i>Username</Form.Label>
              <Form.Control
                className="form"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
               />
              <Form.Text className="text-muted">
                {/* We'll never share your info with any third parties. */}
              </Form.Text>
            </Form.Group>

          <br />

            <Form.Group controlId="formBasicPassword">
              <Form.Label><i className="fas fa-key pl-2 pr-2"></i>Password</Form.Label>
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
              className="button mr-4 ml-3"
              variant="dark"
              type="submit"
              onClick={this.handleFormSubmit}
            >
              Submit
            </Button>

            <a href="/register"><i className="far fa-hand-point-right pr-2"></i>Sign up / Register</a>

          </Form>

        </Card>

        {/* Right card of the Sign In page */}
        <Card className="col-8 cha text-center pt-5 shadow">
          <Card.Body>
          <Card.Img src="../Chat.png" alt="Logo" className="image mb-5" style= {{height: '200px', width:'200px'}}/>
            <h3>Welcome back!! Please Sign In to enter <strong>Ch@</strong>.</h3>
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


export default SignIn;