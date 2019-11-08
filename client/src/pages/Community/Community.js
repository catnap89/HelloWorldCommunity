import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from "../../components/Top"; // Navbar
import CardDeck from 'react-bootstrap/CardDeck';
// import Side from "../../components/Side";
import Chatbox from "../../components/Chatbox";
import Sideright from "../../components/Sideright";
import axios from "axios";
import SideCommunity from "../../components/Side-Community";


class Community extends Component {
  // Not sure what to have in the states yet.
  state = {
    userInfo: {},
    participants: []
    // title: "",
    // communityCreator: "",
  };

  componentDidMount() {
    this.checkUser();
  }

  checkUser = () => {
    console.log("PARAMS!");
    console.log(this.props.match.params.id);
    axios.get('/auth/isauth')
      .then(res => {
        console.log("res: ");
        console.log( res.data.user)
        if (res.data.user ) {
          // debugger;
          if (res.data.user.bannedCommunityIDs.includes(this.props.match.params.id)) {
            this.props.history.push("/");
          } else {
            return this.setState({
              userInfo: res.data.user || {}
            });
          }
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(error => {
        console.log(error);
        this.props.history.push("/login");
      })
  }

  handleFavoriteCommunity = () => {
    const communityId = this.props.match.params.id;
    const username = this.state.userInfo.username;
    axios.patch("/api/user/add/favoriteCommunity/" + communityId +  "/" + username)
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
      <div className="App">
        <Top 
          username={this.state.userInfo.username}
        />
        <CardDeck className="pt-5 mt-5 size mx-auto"> 
          <SideCommunity 
            handleFavoriteCommunity={() => this.handleFavoriteCommunity()}
          />
          <Chatbox />
          <Sideright /> 
        </CardDeck> 
      
      </div>
    );
  }
}

export default Community;
