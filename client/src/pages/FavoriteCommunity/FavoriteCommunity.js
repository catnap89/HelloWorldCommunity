import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Top from "../../components/Top"; 
import CardDeck from 'react-bootstrap/CardDeck';
import Side from "../../components/Side";
import SavedChatroom from "../../components/SavedChatroom";
// import './main.css'



class FavoriteCommunity extends Component {
  // Not sure what to have in the states yet.
  state = {
    userInfo: {},
    savedCommunities: [],
    noCommunity: false
  };


  componentDidMount() {
    this.checkUser().then(res => {
        console.log("res: " + res.data.user.username);
        if (res.data.user) {
          this.setState({
            userInfo: res.data.user || {}
          });
          this.getSavedCommunity();
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
  getSavedCommunity = () => {
    console.log(this.state.userInfo);
    const username = this.state.userInfo.username;
    console.log("username: " + username);
    axios.get('/api/user/' + username)
      .then(res => {
        if (res.data) {
          console.log(res.data);
          return this.setState({
            savedCommunities: res.data[0].favoriteCommunityIDs
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
            username={this.state.userInfo}
          />
          <CardDeck className="size mx-auto"> 
            <Side />
            <h1>There are no saved communities</h1>
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
        <CardDeck className="pt-5 mt-5 size mx-auto"> 
          <Side />
          <CardDeck className= 'col-9 p-3 chat border-0 mt-5 mb-4 mx-auto overflow-auto'>
            {this.state.savedCommunities.map(favCommunity => <SavedChatroom key={favCommunity._id} favCommunity={favCommunity} handleJoinCommunity={() => this.handleJoinCommunity(favCommunity)}/>)}
          </CardDeck> 
        </CardDeck> 
      </div>
    );

  }
}

export default FavoriteCommunity;