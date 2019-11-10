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



class Community extends Component {

  // state = {
  //   userInfo: {},
  //   participants: [],
  //   liked: false,
  //   isAdmin: false
  // };

  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      participants: [],
      liked: false,
      isAdmin: false,
      message: "",
      messages: [],
      numChildren: 0,
      messageId: 0
    }

    this.socket = io(process.env.PORT || 'http://localhost:5000');

    this.socket.on('RECEIVE_MESSAGE', function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({
        messages: [...this.state.messages, data]
      });
      console.log(this.state.messages);
    };



  }
  
  // sending sockets
  // send = () => {
  //   const socket = socketIOClient(this.state.endpoint);
  //   socket.emit('chat message', this.state.message)
  // }

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
        // if user is logged in, check below
        if (res.data.user ) {
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
            // push username, no actually userInfo obejct to the end of participants array
            // NEED TO TEST THIS IN DEPLOYED VERSION SINCE IN DEVELOPMENT ONLY ONE USER CAN BE LOGGED IN
            // OR IS IT..?
            // It does not seem to work. Only shows myself even in the deployed version and with 2 accounts in same chat
            // Might need to use community data with participants stored and removed as user join and leave..?
            this.setState(prevState => ({
              participants: [...prevState.participants, this.state.userInfo]
            }));
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

  banUser = (participants) => {
    console.log(participants);
    console.log(participants._id);
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
    event.preventDefault();
    console.log(this.state.message);
    // this.setState({
    //   numChildren: this.state.numChildren + 1
    // });
    this.socket.emit('SEND_MESSAGE', {
      username: this.state.userInfo.username,
      message: this.state.message,
      messageId: this.state.messageId
    });
    this.setState({
      message: '',
      messageId: this.state.messageId + 1
    });
  };


  render() {
    const label = this.state.liked ? 'Unlike' : 'Like'
    // const liked = this.state.liked

    // const children = [];

    // for (var i = 0; i < this.state.numChildren; i += 1) {
    //   children.push(<Chatbox key={i} msg={this.state.message} username={this.state.userInfo.username}/>);
    // };

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

            <Card.Header as="h5" className="bg-white">Chat Title</Card.Header>

            <Card.Body className='scroll'>


              {this.state.messages.map(message => 
                <Chatbox 
                  key={message.messageId} 
                  message={message} 
                  handleFormSubmit={() => this.handleFormSubmit()}
                />)}


              {/* THIS ONE WORKS SOMEWHAT */}
              {/* <div className="messages">
                {this.state.messages.map(message => {
                  return (
                    <div key={message.messageId}>
                      {message.username}: {message.message}
                    </div>
                  )
                })}
              </div> */}

            </Card.Body>

            <Card.Footer fixed="bottom" className="text-muted bg-white border-0 mt-0 pt-0">

              <InputGroup size="lg" className="mb-0 shadow-sm fontAwesome"> 
                <FormControl 
                  className="bg-light shadow-none" 
                  autoFocus="autofocus" 
                  placeholder="Say something...&#xF075;"
                  onChange={this.handleInputChange}
                  value={this.state.message}
                  name="message"
                /> 
                <InputGroup.Append>
                  <Button 
                    variant="dark border pl-3 pr-3"
                    onClick={this.handleFormSubmit}
                  >
                    <i className="fas fa-share pr-2"></i>
                    Send
                  </Button>
                </InputGroup.Append>
              </InputGroup> 
            </Card.Footer>
          </Card>

          {/* Right Sidebar for Community page */}
          <Sideright >
            {this.state.participants.map(participants => (
              <Participants key={participants._id}>
                <div className="userlist d-flex my-auto mt-0">
                 
                  <BanBtn isAdmin={this.state.isAdmin} banUser={() => this.banUser(participants)}></BanBtn>
                   <li className="memItems my-auto pl-1">{participants.username}</li> 
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