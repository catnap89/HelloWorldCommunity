import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Top from "../../components/Top"; // Navbar
import CardDeck from 'react-bootstrap/CardDeck';
import Side from "../../components/Side";
import Chatbox from "../../components/Chatbox";
import Sideright from "../../components/Sideright";


class Main extends Component {
  // Not sure what to have in the states yet.
  state = {
    users: [],
    communities: []
  };

  // make a request to the backend and check if the req.user object is not null
  // if it's not null, then send that object back and use it on the frontend

  // use request.user if is null (false), then send 403. which is going to cause catch on axios
  // props.history,sometihnfskdnf to sign in
  

  checkUser = () => {
    axios.get('/authentication/isauth')
      .then(res => {
        console.log(res.data);
      })
  }


  render() {
    return (
      <div className="App">
        <h1>Main Page</h1>  
        
        <button onClick={this.checkUser}>Check User</button>
      </div>
    );
  }
}

export default Main;
