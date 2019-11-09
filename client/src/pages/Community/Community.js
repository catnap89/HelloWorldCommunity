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
    participants: [],
    liked: false,
    isAdmin: false
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
          // if the current user is banned from current community
          if (res.data.user.bannedCommunityIDs.includes(this.props.match.params.id)) {
            // redirect the user to the main page
            this.props.history.push("/");
          } else {
            this.setState({
              userInfo: res.data.user || {}
            })
            if (res.data.user.favoriteCommunityIDs.includes(this.props.match.params.id)) {
              this.setState({
                liked: true
              })
              console.log(this.state.liked);
            } else {
              this.setState({
                liked: false
              })
              console.log(this.state.liked);
            }
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


  handleFavoriteCommunity = (label) => {
    const communityId = this.props.match.params.id;
    const username = this.state.userInfo.username;

    if (label === "Unlike") {
      console.log("like state: " + this.state.like);
      axios.patch("/api/user/remove/favoriteCommunity/" + communityId + "/" + username)
        .then(res => {
          console.log("successfully removed this community from my favorites: " + res);
        })
    } else {
      axios.patch("/api/user/add/favoriteCommunity/" + communityId + "/" + username)
        .then(res => {
        console.log("successfully favorited this community: " + res);
        })
    }
  
    this.checkUser();
  }


  render() {
    const label = this.state.liked ? 'Unlike' : 'Like'
    // const liked = this.state.liked
    return (
      <div className="App">
        <Top 
          username={this.state.userInfo.username}
        />
        <CardDeck className="size mx-auto"> 
          <SideCommunity 
            handleFavoriteCommunity={() => this.handleFavoriteCommunity(label)}
            label={label}
          />
          <Chatbox />
          <Sideright /> 
        </CardDeck> 
      
      </div>
    );
  }
}

export default Community;