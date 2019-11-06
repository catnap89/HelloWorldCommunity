import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from "../../components/Top"; // Navbar
import CardDeck from 'react-bootstrap/CardDeck';
import Side from "../../components/Side";
// import CreateChatForm from "../../components/CreateChatForm/index"
import axios from "axios";

import Card  from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

class CreateChat extends Component {
  // Not sure what to have in the states yet.

  state = {
    userAdmin: "",
    communityName: "",
    communityDesc: ""
  };

  componentDidMount() {
    this.checkUser();
  }

  checkUser = () => {
    axios.get('/auth/isauth')
      .then(res => {
        console.log("res.data.user.username: " + res.data.user.username);
        console.log("res.data.user._id: " + res.data.user._id);
        if (res.data.user) {
          return this.setState({
            userAdmin: res.data.user._id || {}
            // userAdmin: res.data.user.username || {}
          });
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(error => {
        // console.log("error: " + error.response.data.message);
        // this.setState({
        //   errorMessage: error.response.data.message
        console.log(error);
        this.props.history.push("/login");
      })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //next step is to make an axios.post using the email and password that our user enters
    const communityInfo = {
      userAdmin: this.state.userAdmin,
      communityName: this.state.communityName,
      communityDesc: this.state.communityDesc
    }

    console.log(communityInfo);
    axios.post("/api/community", communityInfo)
      .then((response) => {
        console.log(response.data);
        // route to Main View
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      })
  };
  
  render() {
    return (
      <div className="App">
        <Top />
        <CardDeck className="pt-5 mt-5 size mx-auto"> 
          <Side />
          {/* <CreateChatForm /> */}
          <CardDeck className= 'col-10 chat border-0 mt-5 mb-4 mx-auto'>
          <Card className="col-5 bg-light shadow">
            <Card.Title className="pt-4 pl-2 mb-0">Create New Chatroom</Card.Title>
            <hr />
            <br />
            <Form>
              <Form.Group as={Col} controlId="formGridChatName">
                <Form.Label><i className="fas fa-plus-circle pl-2 pr-2"></i>Chatroom Title</Form.Label>
                <Form.Control 
                  className="form" 
                  type="name" 
                  placeholder="Title"
                  value={this.state.communityName}
                  onChange={this.handleInputChange}
                  name="communityName" 
                />
              </Form.Group>
              <br />
              <Form.Group as={Col} controlId="formGridChatDescription">
                <Form.Label><i className="fas fa-info-circle pl-2 pr-2"></i>Chatroom Description</Form.Label>
                <Form.Control as="textarea" rows="3"
                  className="form" 
                  type="name" 
                  placeholder="Description" 
                  value={this.state.communityDesc}
                  onChange={this.handleInputChange}
                  name="communityDesc"
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
            </Form>
          </Card>
          </CardDeck>
        </CardDeck> 
      
      </div>
    );
  }
}

export default CreateChat;