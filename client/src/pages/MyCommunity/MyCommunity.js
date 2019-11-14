import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Top from "../../components/Top"; 
import CardDeck from 'react-bootstrap/CardDeck';
import Side from "../../components/Side";
import MyChatroom from "../../components/MyChatroom";

class MyCommunity extends Component {

  state = {
    userInfo: {},
    myCommunities: [],
    noCommunity: false
  };


  componentDidMount() {
    this.checkUser().then(res => {
      console.log("res: " + res.data.user.username);
      if (res.data.user) {
        this.setState({
          userInfo: res.data.user || {}
        });
        this.getMyCommunity();
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
  getMyCommunity = () => {
    console.log(this.state.userInfo);
    const username = this.state.userInfo.username;
    console.log("username: " + username);
    axios.get('/api/user/' + username)
      .then(res => {
        if (res.data[0].ownedCommunityIDs) {
          console.log("Get Community res.data: " + JSON.stringify(res.data[0].ownedCommunityIDs));
          return this.setState({
            myCommunities: res.data[0].ownedCommunityIDs
          })
        } else {
          this.setState({
            noCommunity: true
          })
        }
      }) 
  }

  handleJoinCommunity (community) {

    if (this.state.userInfo) {
      if (community.bannedList.includes(this.state.userInfo.username)) {
        //the user is not allowed, maybe alert them that they are banned
        //TODO make this fancy if we have time
        alert("Sorry you have been banned from this Chatroom.")
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

  handleRemoveCommunity = (community) => {
    if (this.state.userInfo) {
      if (this.state.userInfo.ownedCommunityIDs.includes(community._id)) {
        // Remove community data
        axios.delete(`/api/community/${community._id}`);
        // Remove from ownedCommunity array in user data
        axios.patch(`/api/user/remove/ownedCommunity/${community._id}/${this.state.userInfo.username}`)
          .then(res => {
            console.log("Removed from my ownedCommunity: " + res);
          })
          .catch(err => {
            console.log(err);
          });
        // Remove from favoriteCommunity array in user data
        axios.patch(`/api/user/remove/favoriteCommunity/${community._id}/${this.state.userInfo.username}`)
          .then(res => {
            console.log("Removed from my favoriteCommunity: " + res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  render() {
    if (this.state.noCommunity) {
      return (
        <div className="App">
          <Top 
            username={this.state.userInfo}
          />
          <CardDeck className="size mx-auto"> 
            <Side />
            <h1>You have not created any community</h1>
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
            {this.state.myCommunities.map(community => 
              <MyChatroom 
                key={community._id}
               community={community} 
               handleJoinCommunity={() => this.handleJoinCommunity(community)}
               handleRemoveCommunity={() => this.handleRemoveCommunity(community)}
              />)}
          </CardDeck> 
        </CardDeck> 
      </div>
    );

  }
}

export default MyCommunity;