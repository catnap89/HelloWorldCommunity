import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Top from "../../components/Top"; 
import CardDeck from 'react-bootstrap/CardDeck';
import Side from "../../components/Side";
// import Chatrooms from "../../components/Chatrooms";
// import Sideright from "../../components/Sideright";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Chatroom from "../../components/Chatrooms";
// import './main.css'



class Main extends Component {
  // Not sure what to have in the states yet.
  state = {
    userInfo: {},
    communities: [],
    noCommunity: false
  };

  // make a request to the backend and check if the req.user object is not null
  // if it's not null, then send that object back and use it on the frontend
  // use request.user if is null (false), then send 403. which is going to cause catch on axios
  // props.history,sometihnfskdnf to sign i

  componentDidMount() {
    this.checkUser().then(res => {
        console.log("res: " + res.data.user.username);
        if (res.data.user) {
          this.setState({
            userInfo: res.data.user || {}
          });
          this.getCommunity();
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(error => {
        console.log(error);
        this.props.history.push("/login");
      });
  }

  checkUser = () => {
    return axios.get('/auth/isauth')
  }

  // Get All communities from DB
  getCommunity = () => {
    console.log(this.state.userInfo)
    axios.get('/api/community/all')
      .then(res => {
        if (res.data.length > 0) {
          console.log(res.data);
          return this.setState({
            communities: res.data
          })
        } else {
          this.setState({
            noCommunity: true
          })
        }
      }) 
  }

  handleJoinCommunity (community) {
    console.log("community.bannedList: " + community.bannedList);
    if (this.state.userInfo) {
      if (community.bannedList.includes(this.state.userInfo._id)) {
        //the user is not allowed, maybe alert them that they are banned
        //TODO make this fancy if we have time
        alert("You have been banhammered. Go somewhere else.")
      }
      else {
        //the user IS allowed, switch locations
        window.location.href = "/community/" + community._id
      }
    } else {
      //user not logged in
      this.props.history.push("/login");
    }
  }

  render() {
    if (this.state.noCommunity) {
      return (
        <div className="App">
          <Top 
            username={this.state.userInfo.username}
          />
          <CardDeck className="size mx-auto"> 
            <Side />
            <h1>There are no available communities</h1>
          </CardDeck> 
        </div>
      );
    }
    // Original
    return (
      <div className="App">
        <Top 
          username={this.state.userInfo.username}
        />
        <CardDeck className="size mx-auto"> 
          <Side />
          <CardDeck className= 'col-9 p-3 chat border-0 mt-5 mb-4 mx-auto overflow-auto'>
            {/* <div className="mainheaderContainer">
              <h1 className="mainheader">All Communities</h1>
            </div> */}

            {this.state.communities.map(community => <Chatroom key={community._id} community={community} handleJoinCommunity={() => this.handleJoinCommunity(community)}/>)}
          </CardDeck> 
        </CardDeck> 
      </div>
    );

  }
}

export default Main;
