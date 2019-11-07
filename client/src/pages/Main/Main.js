import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Top from "../../components/Top"; 
import CardDeck from 'react-bootstrap/CardDeck';
import Side from "../../components/Side";
// import Chatrooms from "../../components/Chatrooms";
// import Sideright from "../../components/Sideright";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
    this.checkUser();
    this.getCommunity();
  }

  checkUser = () => {
    axios.get('/auth/isauth')
      .then(res => {
        console.log("res: " + res.data.user.username);
        if (res.data.user) {
          return this.setState({
            userInfo: res.data.user || {}
          });
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(error => {
        console.log(error);
        this.props.history.push("/login");
      })
  }

  // Get All communities from DB
  getCommunity = () => {
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

  render() {
    if (this.state.noCommunity) {
      return (
        <div className="App">
          <Top 
            username={this.state.userInfo.username}
          />
          <CardDeck className="pt-5 mt-5 size mx-auto"> 
            <Side />
            <h1>There are no available communities</h1>
          </CardDeck> 
        </div>
      );
    }
    // Original
    // return (
    //   <div className="App">
    //     <Top 
    //       username={this.state.userInfo.username}
    //     />
    //     <CardDeck className="pt-5 mt-5 size mx-auto"> 
    //       <Side />
    //       <Chatrooms />
    //     </CardDeck> 
    //   </div>
    // );

    return (
      <div className="App">
        <Top 
          username={this.state.userInfo.username}
        />
        <CardDeck className="pt-5 mt-5 size mx-auto"> 
          <Side />
          <CardDeck className= 'col-9 p-3 chat border-0 mt-5 mb-4 mx-auto'>
            {this.state.communities.map(community => (
              <Card className= "cardchat" key={community._id} style={{ maxWidth: '22rem' }}>
                <Card.Header href="" className="pl-3 pt-3 mb-0 chattitle">{community.communityName}</Card.Header>
                
                <Card.Body className="overflow-auto">

                  <Card.Text>
                    {community.communityDesc}
                  </Card.Text>

                </Card.Body>
                
                <Card.Footer>
                  {/* HOW TO ACCESS USER DATA FROM COMMUNITY DATA? */}
                  <small className="text-muted mr-auto">Moderator : {community.username}</small> 
                  {/* MAKE A BUTTON OR LINK TO /community/:communityID */}
                  <Button className="ml-5" variant="link">Join Chat</Button>
                </Card.Footer>
              </Card>
            ))}
          </CardDeck>

        </CardDeck> 
      </div>
    );

  }
}

export default Main;
