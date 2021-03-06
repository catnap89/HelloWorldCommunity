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
import SidebarAdmin from "../../components/SidebarAdmin";
import BannedList from "../../components/BannedList";
import UnbanBtn from "../../components/UnbanBtn";

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
      participants: [], // [{username, userId}]
      liked: false,
      isAdmin: false,
      message: "",
      messages: [],
      messageId: 0,
      bannedUsers: [],
      bannedListId: 0,
      displayAdminPanel: false
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
    };
    
    const refreshParticipants = data => {
      console.log("refreshParticipants users array", data.currentActiveUsers);
      console.log("refreshParticipants data");
      console.log(data)
      this.setState({
        participants: data.currentActiveUsers
      });
      console.log("Participants state: " +  JSON.stringify(this.state.participants));
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
            console.log("BannedListId: " + this.state.bannedListId);
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
        // get communityInfo which will have bannedlist that has username and id of the banned user
        // set the bannedUsers state array
        if (this.state.communityInfo.bannedList !== undefined) {

          const bannedUserInfo = [];
          this.state.communityInfo.bannedList.map(bannedUser => 
            (bannedUserInfo.push({ username: bannedUser.username, userId: bannedUser._id, bannedUserId: this.state.bannedListId}) ))
          this.setState({
            bannedUsers: [...this.state.bannedUsers, bannedUserInfo[0]]
          })
          // console.log(bannedUserInfo[0].username);
          // console.log(this.state.bannedUsers[0].username)
          console.log(this.state.bannedUsers[0])
          console.log(this.state.bannedUsers)

          if (this.state.bannedUsers[0] !== undefined) {
            this.setState({
              displayAdminPanel: true
            })
            console.log("bannedUsers Arr Leng", this.state.bannedUsers.length);
            console.log("displayAdmin: " + this.state.displayAdminPanel);
          }

        }
      })

  }

  banUser = (participants) => {
    console.log(participants);
    // banning should add user's bannedCommunityID with current communityID
    axios.patch(`/api/user/add/bannedCommunity/${this.props.match.params.id}/${participants.username}`);
    // also add userId to bannedList of the community's data
    axios.patch(`/api/community/user/ban/${this.props.match.params.id}/${participants.userId}`)
      .then(res => {
        console.log("banned res: " + JSON.stringify(res.data));
      })
    this.setState({
      bannedListId: this.state.bannedListId + 1
    })

  }

  unbanUser = (bannedUser) => {
    console.log(bannedUser);
    // unbanning should remove current communityID from user's bannedCommunityID data array 
    axios.patch(`/api/user/remove/bannedCommunity/${this.props.match.params.id}/${bannedUser.username}`);
    // also remove userId from bannedList of the community's data
    axios.patch(`/api/community/user/unban/${this.props.match.params.id}/${bannedUser.userId}`)
      .then(res => {
        console.log("banned res: " + JSON.stringify(res.data));

      })
  }

  // Using this.state.bannedUsers, display list of banned users with button (unban)

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
    if (this.state.isAdmin && this.state.displayAdminPanel) {
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

            {/* CHAT BOX */}
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

                <InputGroup className="mb-0 shadow-sm fontAwesome"> 
                  <FormControl 
                    className="bg-light shadow-none" 
                    autoFocus="autofocus" 
                    placeholder="Say something..."
                    onChange={this.handleInputChange}
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
                      <i className="fas fa-share mr-2"></i>
                      Send
                    
                    </Button>
                  </InputGroup.Append>
                </InputGroup> 
              </Card.Footer>
            </Card>

            {/* Right Sidebar for Community page */}
            <Sideright >

              {this.state.participants.map(user => (
                <Participants key={user.userId}>
                  <div className="userlist d-flex my-auto mt-0">
                  
                    <BanBtn isAdmin={this.state.isAdmin} banUser={() => this.banUser(user)}></BanBtn>
                    <li className="memItems my-auto pl-1">{user.username}</li> 

                  </div>
                </Participants>
              ))}
            </Sideright>

            {/* Admin Panel for Community page */}
            <SidebarAdmin isAdmin={this.state.isAdmin}>

              {this.state.bannedUsers.map(bannedUser => (
                <BannedList key={bannedUser.bannedUserId} >
                  <div className="userlist d-flex my-auto mt-0">

                    <UnbanBtn unbanUser={() => this.unbanUser(bannedUser)}></UnbanBtn>
                    <li className ="memitems my-auto pl-1">{bannedUser.username}</li>

                  </div>
                </BannedList>
              ))}
            </SidebarAdmin>
    
          </CardDeck> 
        
        </div>
    
      );
    }
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

            {/* CHAT BOX */}
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

                <InputGroup className="mb-0 shadow-sm fontAwesome"> 
                  <FormControl 
                    className="bg-light shadow-none" 
                    autoFocus="autofocus" 
                    placeholder="Say something..."
                    onChange={this.handleInputChange}
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
                      <i className="fas fa-share mr-2"></i>
                      Send
                    
                    </Button>
                  </InputGroup.Append>
                </InputGroup> 
              </Card.Footer>
            </Card>

            {/* Right Sidebar for Community page */}
            <Sideright >

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