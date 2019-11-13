import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from "../../components/Top"; // Navbar
import CardDeck from 'react-bootstrap/CardDeck';
import Chatbox from "../../components/Chatbox";
import Sideright from "../../components/Sideright";
import axios from "axios";
import SideCommunity from "../../components/Side-Community";
import Participants from "../../components/Participants";
import BanBtn from "../../components/BanBtn";

import Card  from 'react-bootstrap/Card';
import { FormControl, InputGroup, Button} from 'react-bootstrap';
import "./community.css";
import io from 'socket.io-client';

const socketURL = process.env.NODE_ENV === "development" ? "http://localhost:5000" : "/";

class Community extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      communityInfo: {},
      participants: [],
      liked: false,
      isAdmin: false,
      message: "",
      messages: [],
      messageId: 0
    }
    
    this.socket = io(socketURL);

    this.socket.on('RECEIVE_MESSAGE', function(data) {
      if (data.communityID === props.match.params.id) {
        addMessage(data);
      }
    });

    //NOTE this can probably be optimized emit an event only for this community, but this will work for now
    this.socket.on('ACTIVE_USERS_CHANGED', data => {
      // console.log("got to active users changed")
      // console.log("data.currentActiveUsers", data.currentActiveUsers)
      if (data && data.communityID === props.match.params.id && data.currentActiveUsers) {
        refreshParticipants(data);
      }
    });

    const addMessage = data => {
      console.log(data);
      this.setState({
        messages: [...this.state.messages, data]
      });
      console.log(this.state.messages);
      // if (!this.state.participants.map(user => user.userId).includes(this.state.userInfo._id)) {
      //     this.socket.emit("JOIN_CHAT", {
      //       communityID: this.props.match.params.id,
      //       user: this.state.userInfo
      //     });
      // }
    };
    
    const refreshParticipants = data => {
      console.log("refreshParticipants users array", data.currentActiveUsers);
      console.log("refreshParticipants data");
      console.log(data)
      this.setState({
        participants: data.currentActiveUsers
      });
    }

  }
  

  componentDidMount() {
    this.checkUser();
    this.communityInfo();
  }

  componentWillUnmount() {
    if (this.state.userInfo) {
      //emit a "LEFT_CHAT" socket event when page change in application
      this.socket.emit("LEFT_CHAT", {
        communityID: this.props.match.params.id,
        user: this.state.userInfo
      });
    }
  }

  checkUser = () => {
    console.log("PARAMS!");
    console.log(this.props.match.params.id);
    axios.get('/auth/isauth')
      .then(res => {
        console.log("res: ");
        console.log( res.data.user)
        // if user is logged in, check below
        if (res.data.user) {
          // if the current user is banned from current community
          if (res.data.user.bannedCommunityIDs.includes(this.props.match.params.id)) {
            // redirect the user to the main page
            this.props.history.push("/");
            // if user is logged in and not banned from the community,
          } else {
              // set userInfo state to user's information from /auth/isauth
              this.setState({
                userInfo: res.data.user || {}
              })

              //emit a "User Joined" socket event
              //NOTE we can refactor the axios calls below to perform the db update in the "JOIN_CHAT" event
              this.socket.emit("JOIN_CHAT", {
                communityID: this.props.match.params.id,
                user: res.data.user
              });
              //define an event that will emit a "LEFT_CHAT" event when the browser closes or the back button is pressed      
              window.onbeforeunload = () => {
                this.socket.emit("LEFT_CHAT", {
                communityID: this.props.match.params.id,
                user: res.data.user
              });

            }

            console.log(this.state.participants);
            // if the current user has created this community,
            if (res.data.user.ownedCommunityIDs.includes(this.props.match.params.id)) {
              // set isAdmin state to true
              this.setState({
                isAdmin: true
              })
            } // not really sure if I need to make else statement to change isAdmin state to false because default is false
            // And also, if user have this community as favorite community,
            if (res.data.user.favoriteCommunityIDs.includes(this.props.match.params.id)) {
              // set liked state to true
              this.setState({
                liked: true
              })
              console.log(this.state.liked);
              // if not, set liked state to false
            } else {
              this.setState({
                liked: false
              })
              console.log(this.state.liked);
            }
          }
        // if user is not logged in, redirect the user back to login page
        // preventing to access this page without logging in
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

    if (this.state.liked) {
      console.log("like state: " + this.state.liked);
      axios.patch("/api/user/remove/favoriteCommunity/" + communityId + "/" + username)
        .then(res => {
          console.log("successfully removed this community from my favorites: " + res);
          this.setState({liked: false});
        })
    } else {
      axios.patch("/api/user/add/favoriteCommunity/" + communityId + "/" + username)
        .then(res => {
        console.log("successfully favorited this community: " + res);
        this.setState({liked: true});
        })
    }

  }

  communityInfo = () => {
    axios.get(`/api/community/${this.props.match.params.id}`)
      .then(res => {
        console.log("COMMUNITY INFO: " +  res.data[0].communityName);
        this.setState({
          communityInfo: res.data[0]
        })
        console.log("Community INFO STATE" + JSON.stringify(this.state.communityInfo));
        
      })
  }

  banUser = (participants) => {
    console.log(participants);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Sending message to the server 
  handleFormSubmit = event => {

    // const msg = this.state.message;
    // event.preventDefault();
    console.log(this.state.message);
    // this.setState({
    //   numChildren: this.state.numChildren + 1
    // });
    this.socket.emit('SEND_MESSAGE', {
      username: this.state.userInfo.username,
      message: this.state.message,
      messageId: this.state.messageId,
      communityID: this.props.match.params.id
    });
    this.setState({
      message: '',
      messageId: this.state.messageId + 1
    });
  };

  onKeyPress = (e) => {
    if (e.which === 13) {
      this.handleFormSubmit();
    }
  }

  render() {
    const label = this.state.liked ? 'Unlike' : 'Like'

    return (
      <div className="App">
        {/* Navbar */}
        <Top 
          username={this.state.userInfo.username}
        />
        {/* BODY */}
        <CardDeck className="size mx-auto"> 
          {/* Left Sidebar for Community Page*/}
          <SideCommunity 
            handleFavoriteCommunity={() => this.handleFavoriteCommunity(label)}
            label={label}
          />
          {/* <Chatbox 
            handleInputChange={() => this.handleInputChange()}
            handleFormSubmit={() => this.handleFormSubmit()}
            value={this.state.message}
            name="message"
          /> */}

          <Card className= 'col-9 p-1 border-0 chat mt-3 mb-0 mx-auto'>

            <Card.Header as="h5" className="bg-white">{this.state.communityInfo.communityName}</Card.Header>

            <Card.Body className='scroll'>

              {this.state.messages.map(message => 
                <Chatbox 
                  key={message.messageId} 
                  message={message} 
                  handleFormSubmit={() => this.handleFormSubmit()}
                />)}

            </Card.Body>

            <Card.Footer fixed="bottom" className="text-muted bg-white border-0 mt-0 pt-0">

              <InputGroup size="lg" className="mb-0 shadow-sm fontAwesome"> 
                <FormControl 
                  className="bg-light shadow-none" 
                  autoFocus="autofocus" 
                  placeholder="Say something..."
                  onChange={this.handleInputChange}
                  // I don't think onKeyPress is needed in form, maybe try to use it only in button
                  onKeyPress={this.onKeyPress}
                  value={this.state.message}
                  name="message"
                /> 
                <InputGroup.Append>
                  <Button 
                    variant="dark border pl-3 pr-3"
                    onClick={this.handleFormSubmit}
                    onKeyPress={this.onKeyPress}
                  >
                    <i className="fas fa-spinner fa-pulse mr-2"></i>
                     Send
                   
                  </Button>
                </InputGroup.Append>
              </InputGroup> 
            </Card.Footer>
          </Card>

          {/* Right Sidebar for Community page */}
          <Sideright >
            {/* {this.state.participants.map(participants => (
              <Participants key={participants._id}>
                <div className="userlist d-flex my-auto mt-0">
                 
                  <BanBtn isAdmin={this.state.isAdmin} banUser={() => this.banUser(participants)}></BanBtn>
                   <li className="memItems my-auto pl-1">{participants.username}</li> 
                </div>
              </Participants>
            ))} */}
            {this.state.participants.map(user => (
              <Participants key={user.userId}>
                <div className="userlist d-flex my-auto mt-0">
                 
                  <BanBtn isAdmin={this.state.isAdmin} banUser={() => this.banUser(user)}></BanBtn>
                   <li className="memItems my-auto pl-1">{user.username}</li> 
                </div>
              </Participants>
            ))}
          </Sideright>
  
        </CardDeck> 
      
      </div>
  
    );
  }
}

export default Community;