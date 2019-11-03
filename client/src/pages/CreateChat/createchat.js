import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from "../../components/Top"; // Navbar
import CardDeck from 'react-bootstrap/CardDeck';
import Side from "../../components/Side";
// import Sideright from "../../components/Sideright";


class CreateChat extends Component {
  // Not sure what to have in the states yet.
  state = {
    users: [],
    title: "",
    communityCreator: "",
  };

  render() {
    return (
      <div className="App">
        <Top />
        <CardDeck className="pt-5 mt-5 size mx-auto"> 
          <Side />
          {/* <Sideright />  */}
        </CardDeck> 
      
      </div>
    );
  }
}

export default CreateChat;